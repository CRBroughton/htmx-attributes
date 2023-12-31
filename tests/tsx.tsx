export default function test(test: any) {
    return (
        <button
            hx-boost="true"
            hx-get={test}
            hx-on:click=""
            hx-post={test}
            hx-push-url="true"
            hx-select="true"
            hx-select-oob="true"
            hx-swap="true"
            hx-target="true"
            hx-trigger="true"
            hx-vals='{"myVal": "My Value"}'
        >
        </button>
    )
}