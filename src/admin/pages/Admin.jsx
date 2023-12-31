import { useState, useEffect } from "react";
import { Students } from "../../admin/components/ListStudents";
import { useStudents } from "../../hook/useStudents";
import NavBar from "../../components/NavBar";
import "../../style/ConfirmModal.css";
import "../css/admin.css";
import EditNoteStudents from "../components/EditNoteStudents";
import EditStudents from "../components/EditStudents";

function Admin() {
  const [search, setSearch] = useState("");
  const { students, loading, getStudents } = useStudents();

  const handleChange = (event) => {
    setSearch(event.target.value);
    getStudents(event.target.value);
  };

  useEffect(() => {
    getStudents("");
  }, []);

  return (
    <>
      <EditStudents getStudents={getStudents} />
      <EditNoteStudents getStudents={getStudents} />
      <NavBar getStudents={getStudents} />
      <form className="search">
        <input
          type="search"
          onChange={handleChange}
          value={search}
          name="query"
          placeholder="Filtro de alumnos"
        />
      </form>
      <main>
        <section>
          {loading ? <p>Cargando...</p> : <Students alumnos={students} />}
        </section>
      </main>
    </>
  );
}

export default Admin;
