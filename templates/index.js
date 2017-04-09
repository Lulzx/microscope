import { renderToString } from 'react-dom/server';

export default (title, app) => `
    <!DOCTYPE html><html lang="en">
        <head>
          <title>${title}</title
        </head>

      <body>
        <div id="app">${renderToString(app)}</div>
      </body>
    </html>
`;
