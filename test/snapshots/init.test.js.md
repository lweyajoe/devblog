# Snapshot report for `test/init.test.js`

The actual snapshot is saved in `init.test.js.snap`.

Generated by [AVA](https://avajs.dev).

## initializes site

> Snapshot 1

    {
      nunjucksFilters: [
        {
          filter: Function filter {},
          name: 'year',
        },
      ],
    }

## initializes site

> Snapshot 2

    `title: My Devblog␊
    layout: layout.njk␊
    ---␊
    ␊
    # My Devblog␊
    ␊
    Edit this content and create more Markdown pages,␊
    ␊
    <br>␊
    ␊
    then run `npx devblog` to build your site`

> Snapshot 3

    `<!DOCTYPE html>␊
    <html lang="en">␊
      <head>␊
        <meta charset="UTF-8">␊
        <meta name="viewport" content="width=device-width, initial-scale=1.0">␊
        <title>Document</title>␊
      </head>␊
      <body>␊
        <header>main header</header>␊
        <main>␊
          {% block content %}{% endblock %}␊
        </main>␊
        <footer>main footer</footer>␊
      </body>␊
    </html>`