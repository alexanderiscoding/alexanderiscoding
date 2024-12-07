"use client";

import { useEffect } from "react";

export default function Component({ serviceID }) {
  useEffect(() => {
    const swaggerCSS = document.createElement("link");
    swaggerCSS.rel = "stylesheet";
    swaggerCSS.href = "https://unpkg.com/swagger-ui-dist@5.18.2/swagger-ui.css";
    document.head.appendChild(swaggerCSS);

    const swaggerScript = document.createElement("script");
    swaggerScript.src = "https://unpkg.com/swagger-ui-dist@5.18.2/swagger-ui-bundle.js";
    swaggerScript.crossOrigin = "anonymous";

    // Handle script load error
    swaggerScript.onerror = () => {
      alert("Failed to load Swagger UI script.");
    };

    swaggerScript.onload = () => {
      window.ui = SwaggerUIBundle({
        url: `https://assets.alexanderiscoding.com/openapi/${serviceID}.json`,
        dom_id: "#swagger-ui",
        lang: "pt-BR",
        deepLinking: true,
        presets: [window.SwaggerUIBundle.presets.apis, window.SwaggerUIBundle.SwaggerUIStandalonePreset],
        layout: "BaseLayout",
      });
    };

    document.body.appendChild(swaggerScript);

    return () => {
      document.head.removeChild(swaggerCSS);
      document.body.removeChild(swaggerScript);
    };
  }, [serviceID]);

  return <div id="swagger-ui" className="pb-8"></div>;
}
