import downloadIcon from "../../assets/icons/download.svg";
import { IBula } from './../../interfaces/IBula';
import "./styles.scss";
export default function SearchItem({ item}: { item: IBula }) {
  return (
    <tr key={item.id}>
      <td className="medicine">
        {item.name}
      </td>
      <td className="company">{item.company}</td>
      <td className="published-at">{new Date(item.published_at).toLocaleDateString("pt-BR")}</td>
      <td className="patient">
        <a href={item.documents.find((document) => document.type === "PATIENT")?.url}>
          <img src={downloadIcon} alt="download" />
        </a>
        <p>Paciente</p>
      </td>
      <td className="professional">
        <a href={item.documents.find((document) => document.type === "PROFESSIONAL")?.url}>
          <img src={downloadIcon} alt="download" />
        </a>
        <p>Profissional</p>
      </td>
    </tr>
  );
}
