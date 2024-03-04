fx_version "cerulean"

description "react"
author "CreztY"
version "0.0.1"
lua54 "yes"

games { "gta5", "rdr3"}

ui_page "web/build/index.html"
--loadscreen 'web/build/index.html'
--loadscreen_cursor 'yes'
--loadscreen_manual_shutdown "yes"

client_script "client/**/*"

files {
    "web/build/index.html",
    "web/build/**/*"
}