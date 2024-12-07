"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ApiDocsPage() {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme);
    // Carregar os arquivos CSS e JS apenas nesta página
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
        url: "https://assets.alexanderiscoding.com/openapi/iam.json",
        dom_id: "#swagger-ui",
        lang: "pt-BR",
        deepLinking: true,
        presets: [window.SwaggerUIBundle.presets.apis, window.SwaggerUIBundle.SwaggerUIStandalonePreset],
        layout: "BaseLayout",
        theme: theme === "dark" ? "dark" : "light",
      });
    };

    document.body.appendChild(swaggerScript);

    return () => {
      document.head.removeChild(swaggerCSS);
      document.body.removeChild(swaggerScript);
    };
  }, [theme]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div id="swagger-ui"></div>
    </div>
  );
}
