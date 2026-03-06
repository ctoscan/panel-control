// ===============================
// DATOS DE LOS GRUPOS
// ===============================

const groups = [
{
title: "Principal",
links: [
{ name: "Gmail", url: "https://mail.google.com/mail/u/0/?zx=pm40ysr7k7uw#inbox" },
{ name: "Zimbra", url: "https://wm.agip.gob.ar" },
{ name: "Redmine", url: "http://170.78.75.196:9999/login" },
{ name: "Whatsapp", url: "https://web.whatsapp.com" }
]
},
{
title: "General",
links: [
{ name: "Meet Daily", url: "https://meet.google.com/eko-whmt-bea" },
{ name: "Mantis", url: "https://requerimientossgsr.agip.gob.ar/login_page.php" },
{ name: "SADE", url: "https://cas.buenosaires.gob.ar/acceso/login/login.zul" },
{ name: "Qlikview", url: "http://qlikview.agip.gov.ar/qlikview/index.htm" },
{ name: "Trello", url: "https://trello.com/login" },
{ name: "Platzi", url: "https://platzi.com" },
{ name: "Gitlab", url: "https://gitlab.com/users/sign_in" }
]
},
{
title: "Diseño",
links: [
{ name: "Figma", url: "https://www.figma.com" },
{ name: "Emoji Keyboard", url: "https://emojikeyboard.org" },
{ name: "FlatIcon", url: "https://www.flaticon.es" },
{ name: "Unsplash", url: "https://unsplash.com/es" },
{ name: "UnDraw", url: "https://undraw.co/illustrations" },
{ name: "TypeScale", url: "https://typescale.com" },
{ name: "WebAIM", url: "https://webaim.org/resources/contrastchecker/" },
{ name: "Stitch Design", url: "https://stitch.withgoogle.com" },
{ name: "Draw.io", url: "https://app.diagrams.net" },
{ name: "Apache Echarts", url: "https://echarts.apache.org/examples/en/index.html#chart-type-line" },
{ name: "Components Apex", url: "https://apex.oracle.com/pls/apex/r/wscconn1204/ut299975204782/components" }
]
},
{
title: "Herramientas",
links: [
{ name: "Traductor", url: "https://translate.google.com" },
{ name: "Image to Text", url: "https://www.imagetotext.info/es/imagen-a-texto" },
{ name: "ODT a PDF", url: "https://www.freepdfconvert.com/es/odt-a-pdf" },
{ name: "ODS a XLSX", url: "https://www.freeconvert.com/es/ods-to-xlsx" },
{ name: "WEBM a MP4", url: "https://convertio.co/es/" },
{ name: "App WebFull", url: "https://123apps.com/es/" },
{ name: "Notebook KLM", url: "https://notebooklm.google" }
]
},
{
title: "Lemondata",
links: [
{ name: "Metricas", url: "http://apps.lemondata.com.ar:9090/ords/r/estadisticas/portal_de_metricas/login" },
{ name: "Portal Lemon", url: "http://portal.lemondata.com.ar" },
{ name: "SGC 2.0", url: "https://170.78.75.194:10443/!/#lemondata.com.ar" },
{ name: "Swagger UI", url: "http://10.32.2.62:5000/index.html" },
{ name: "BaeHost", url: "https://vcloud3.baehost.com/login/" },
{ name: "Sistema Compras", url: "http://170.78.75.194:8080/ords/f?p=90115:101" }
]
},
{
title: "Excel",
links: [
{ name: "Matriz de Polivalencia", url: "https://docs.google.com/spreadsheets/d/1uzNFfYd_gpz8i4flpNhaV9MYX_4ZXGvGHm0NPeSMxdk/edit" },
{ name: "Central Cursos Online", url: "https://docs.google.com/spreadsheets/d/1gHLzvZWAy21s6DmsUNtmHCU263SV-h6yaOvxwhohGGM/edit" },
{ name: "Lecciones Aprendidas", url: "https://docs.google.com/spreadsheets/d/175wOYsmM1uAgBKQodtDQZrse0zcKp5FseFJ8NWBJdv0/edit" },
{ name: "Notas Reunion de Equipo", url: "https://docs.google.com/spreadsheets/d/16Es4KK2R_cmf2oPJHPU15KlURknIwkulXBF8zpg1q2c/edit" }
]
},
{
title: "Portal",
links: [
{ name: "AGIP Desarrollo", url: "https://hml.agip.gob.ar/apl/login/login.php" },
{ name: "AGIP Producción", url: "https://lbi.agip.gob.ar/apl/login/login.php" },
{ name: "AGIP Clave Ciudad", url: "https://hml.agip.gob.ar/claveciudad/" }
]
},
{
title: "Drive",
links: [
{ name: "Mi Drive Personal", url: "https://drive.google.com/drive/folders/1PvHUuNUyLK8ERVGKSJHqnR8Gu8OPzrQG" },
{ name: "Carpeta Personal Trabajo", url: "https://drive.google.com/drive/folders/1Z5y1gSCK5HfJFkj4qmCxiIdb23t9cz2t" },
{ name: "Reporte Devolución SAF", url: "https://drive.google.com/drive/folders/1deOYGXJZXpAOUA2gniCh61NJWzAC07gT" },
{ name: "SITI", url: "https://drive.google.com/drive/folders/1Se_ydVc3slvFHi8PXyorizFK2PYGYS37" }
]
}
];

// ===============================
// ICONOS PERSONALIZADOS
// ===============================

const customImages = {
"Redmine": "https://p.kindpng.com/picc/s/366-3668565_redmine-icon-png-transparent-png.png",
"Mantis": "https://e7.pngegg.com/pngimages/276/114/png-clipart-mantis-bug-tracker-bug-tracking-system-issue-tracking-system-software-bug-bugzilla-android-logo-fictional-character-thumbnail.png",
"SADE": "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/xa6fkkcxgdpq83eczwhj",
"Qlikview": "https://ta-relay-public-files-prod.s3.us-east-2.amazonaws.com/icp/product_images/cb9bef60d8537669b3ad2288ee219f12.png",
"SGC 2.0": "https://static.vecteezy.com/system/resources/previews/029/575/818/non_2x/sgc-letter-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg",
"Swagger UI": "https://www.pngrepo.com/png/374111/512/swagger.png",
"BaeHost": "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/qgh0cikyyknynznpx6ck",
"Sistema Compras": "https://img.freepik.com/vetores-premium/icone-de-compras_933463-63538.jpg",
"Metricas": "https://www.empleosit.com.ar/files/pictures/Logo-Lemondata.png",
"AGIP Producción": "https://cca.org.ar/wp-content/uploads/2020/04/agip.png"
};

// ===============================
// RENDERIZADO DEL DASHBOARD
// ===============================

const dashboard = document.getElementById("dashboard");

groups.forEach((group, index) => {

const section = document.createElement("div");
section.className = "group";

const title = document.createElement("div");
title.className = "group-title";
title.textContent = group.title;

const grid = document.createElement("div");
grid.className = "grid";

group.links.forEach(link => {

const card = document.createElement("a");
card.className = "card";
card.href = link.url;
card.target = "_blank";

const iconWrapper = document.createElement("div");
iconWrapper.className = "icon-wrapper";

const icon = document.createElement("img");

// ===== PRIORIDAD 1: ICONO PERSONALIZADO =====
if (customImages[link.name]) {
    icon.src = customImages[link.name];
} else {

    let domain;

    try {
        domain = new URL(link.url).origin;
    } catch {
        domain = "http://" + link.url;
    }

    icon.src = domain + "/favicon.ico";

    // Fallback 1 → Google
    icon.onerror = function () {
        this.onerror = function () {
            iconWrapper.innerHTML = "";
            const fallback = document.createElement("div");
            fallback.className = "fallback-icon";
            fallback.textContent = link.name.charAt(0).toUpperCase();
            iconWrapper.appendChild(fallback);
        };

        this.src = `https://www.google.com/s2/favicons?domain=${link.url}&sz=64`;
    };
}

icon.width = 42;
icon.height = 42;

iconWrapper.appendChild(icon);
card.appendChild(iconWrapper);

const name = document.createElement("span");
name.textContent = link.name;

card.appendChild(name);
grid.appendChild(card);

});

// BOTON ABRIR GRUPO
const openAllCard = document.createElement("div");
openAllCard.className = "card open-group";

openAllCard.innerHTML = `
<div class="icon-wrapper">
<i class="fa-solid fa-rocket" style="font-size: 24px;"></i>
</div>
<span>Abrir Grupo</span>
`;

openAllCard.addEventListener("click", () => {
group.links.forEach(link => {
window.open(link.url, "_blank");
});
});

grid.appendChild(openAllCard);

section.appendChild(title);
section.appendChild(grid);
dashboard.appendChild(section);

if (index !== groups.length - 1) {
const divider = document.createElement("div");
divider.className = "divider";
dashboard.appendChild(divider);
}

});

// ===============================
// RELOJ EN TIEMPO REAL
// ===============================

function updateClock() {
    const now = new Date();

    // ===== HORA =====
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;

    // ===== FECHA =====
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const formattedDate = now.toLocaleDateString("es-AR", options);

    document.getElementById("date").textContent = formattedDate;
}

setInterval(updateClock, 1000);

updateClock();
