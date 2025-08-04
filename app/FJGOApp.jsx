import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Select } from "./components/ui/select";

export default function FJGOApp() {
  const [jobs, setJobs] = useState([]);

  const mockJob = {
    id: 1,
    ruolo: "Account Manager",
    azienda: "Azienda Esempio",
    sede: "Roma",
    retribuzione: "€1600/mese",
    voce: "non richiesta",
  };

  const handleSearch = () => {
    setJobs([mockJob]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">FJGO - Finder Job Gae One</h1>
      <Card>
        <Label>Posizione desiderata:</Label>
        <Input placeholder="Es: Account Manager" />

        <Label>Località preferita:</Label>
        <Input placeholder="Es: Roma o Da Remoto" />

        <Label>Retribuzione minima (€ netti/mese):</Label>
        <Input type="number" defaultValue={1500} />

        <Button onClick={handleSearch}>Cerca lavoro</Button>
      </Card>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Offerte compatibili:</h2>
        {jobs.map((job) => (
          <Card key={job.id}>
            <p><strong>Ruolo:</strong> {job.ruolo}</p>
            <p><strong>Azienda:</strong> {job.azienda}</p>
            <p><strong>Sede:</strong> {job.sede}</p>
            <p><strong>Retribuzione:</strong> {job.retribuzione}</p>
            <p><strong>Uso voce:</strong> {job.voce}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
