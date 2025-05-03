import "./Dados.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Importado useNavigate
import { database, storage } from "../../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage"; // Importando funções do storage

function Dados() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate(); // hook para redirecionar

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Salva os dados no Firestore
      const docRef = await addDoc(collection(database, "usuarios"), {
        name,
        email,
        idade,
        endereco,
        telefone,
      });

      // Salva ID no localStorage para uso posterior
      localStorage.setItem("usuarioId", docRef.id);

      // Faz upload do arquivo (caso exista)
      if (file) {
        const storageRef = ref(storage, `uploads/${docRef.id}`);
        await uploadBytes(storageRef, file);
        console.log("Arquivo enviado com sucesso!");
      }


      // Redireciona para página de seleção de jogos
      navigate("/Jogos");

    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar os dados.");
    }
  };

  return (
    <div className="container-dados">
      <form className="form" onSubmit={handleSubmit}>
        <div className="space-cadastro">
          <h1 className="text-cadastro">Seja um fã conectado com a Furia!</h1>
        </div>
        <input
          name="name"
          placeholder="nome:"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          placeholder="e-mail:"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="idade"
          placeholder="idade:"
          type="number"
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          name="endereco"
          placeholder="endereço:"
          type="text"
          onChange={(e) => setEndereco(e.target.value)}
        />
        <input
          name="telefone"
          placeholder="telefone:"
          type="text"
          onChange={(e) => setTelefone(e.target.value)}
        />
        <div className="space-file">
          <div className="file">
            <input
              name="Upload-arquivos"
              className="input-file"
              type="file"
              onChange={handleFileChange}
            />
            Clique para upload
          </div>
        </div>
        <div className="space-button-dados">
          <NavLink to="/" className="button-voltar-dados">
            Voltar
          </NavLink>
          <button to="/Jogos" className="button-proximo-dados">
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Dados;
