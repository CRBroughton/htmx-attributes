export default function test(test) {
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

            hx-confirm=""
            hx-delete=""
            hx-disable
            hx-disabled-elt="this"
            hx-disinherit="*"
            hx-encoding
            hx-ext=""
            hx-headers='{"myHeader": "My Value"}'
            hx-history="false"
            hx-history-elt
            hx-include="[name='email']"
            hx-indicator=""
            hx-params="*"
            hx-patch=""
            hx-preserve
            hx-prompt=""
            hx-put=""
            hx-replace-url=""
            hx-request=''
            hx-sync=""
            hx-validate
        >
        </button>
    )
}