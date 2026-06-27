"use client";

import Script from "next/script";

export default function Page() {
    return (
        <main className="">
            <Script
                src="https://subscribe-forms.beehiiv.com/attribution.js"
                strategy="afterInteractive"
            />

            <div className="">
             

                <iframe
                    src="https://subscribe-forms.beehiiv.com/v3/forms/c1dde7e8-e62b-4d86-acd6-526f26d89d79"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    style={{
                        margin: "0 auto",
                        border: "none",
                        background: "black",
                    }}
                />
            </div>
        </main>
    );
}