// import { writeFile } from "fs/promises";
// import { SitemapStream, streamToPromise } from "sitemap";
// import baseRoutes from "./src/router/base.routes.js";

// const hostname = "https://datawiseafrica.com";

// async function generateSitemap() {
//     const sitemap = new SitemapStream( { hostname });

//     baseRoutes.forEach((route) => {
//         sitemap.write({ url: route.path, changefreq: "daily", prioroty: 0.8});
//     });

//     sitemap.end();

//     const sitemapXML = await streamToPromise(sitemap).then((data) => data.toString());

//     writeFile("./public/sitemap.xml", sitemapXML, "utf8");
//     console.log("Sitemap generated successfully!");
// }

// generateSitemap();
