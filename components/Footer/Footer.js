import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contacto</h2>
<div>
${Button("../../icons/x.jpeg", "X")}
${Button("../../icons/github.jpeg", "GitHub")}
${Button("../../icons/link.jpeg", "LinkedIn")}
${Button("../../icons/telegram.jpeg", "Telegram")}
</div>
`;