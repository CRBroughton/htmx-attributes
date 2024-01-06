use warp::Filter;
use askama::Template;

#[derive(Template)]
#[template(path = "hello.html")]
struct HelloTemplate {
    button_text: &'static str,
}

#[derive(Template)]
#[template(path = "update.html")]
struct UpdateTemplate {}

#[tokio::main]
async fn main() {
    // Define a simple route that serves an HTML page
    let index = warp::path::end()
        .map(|| {
            let template = HelloTemplate {
                button_text: "Update",
            };
            warp::reply::html(template.render().unwrap())
        });

    
    // Define a route to handle HTMX updates
    let update = warp::path!("update")
        .map(|| {
            let update_template = UpdateTemplate {};
            warp::reply::html(update_template.render().unwrap())
        });

    // Combine the routes
    let routes = index.or(update);

    // Start the warp server
    warp::serve(routes)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
