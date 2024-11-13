import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contacto</h2>
<div>
${Button("../../public/icons/x.jpeg", "X")}
${Button("../../public/icons/github.jpeg", "GitHub")}
${Button("../../public/icons/link.jpeg", "LinkedIn")}
${Button("../../public/icons/telegram.jpeg", "Telegram")}
</div>
`;