export default function test(test: any) {
    return (
        <button
            hx-get={test}
            hx-swap=""
            hx-target=""
            hx-trigger=""
        >
        </button>
    )
}