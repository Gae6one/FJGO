app/page.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";

export default function FJGOApp() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState([]);

  const handleSearch = async () => {
    setLoading(true);
    setTimeout(() => {
      const foundJobs = [
        {
          titolo: "Account Manager da remoto",
          azienda: "CreditoFuturo SpA",
          sede: "Roma",
          stipendio: "1700€ netti",
          descrizione:
            "Ricerca figura commerciale da remoto. Focus clientela aziendale. Categoria protetta richiesta.",
          stato: "Non inviata",
          note: ""
        },
        {
          titolo: "Consulente Finanza Agevolata",
          azienda: "AgevoPlus",
          sede: "Bologna",
          stipendio: "1600€ netti",
          descrizione:
            "Consulenza su bandi e incentivi da remoto. Esperienza nel settore gradita.",
          stato: "Non inviata",
          note: ""
        },
      ];
      setResults(foundJobs);
      setApplications(foundJobs);
      setLoading(false);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedApps = [...applications];
    updatedApps[index].stato = newStatus;
    setApplications(updatedApps);
  };

  const handleNoteChange = (index, newNote) => {
    const updatedApps = [...applications];
    updatedApps[index].note = newNote;
    setApplications(updatedApps);
  };

  const exportOdt = (includeNonInviate) => {
    const toExport = includeNonInviate
      ? applications
      : applications.filter((app) => app.stato !== "Non inviata");

    let content = "Candidature FJGO\n\n";
    toExport.forEach((job, i) => {
      content += `Titolo: ${job.titolo}\nAzienda: ${job.azienda}\nSede: ${job.sede}\nStipendio: ${job.stipendio}\nStato: ${job.stato}\nNote: ${job.note}\n\n`;
    });

    const blob = new Blob([content], { type: "application/vnd.oasis.opendocument.text" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "candidature_fjgo.odt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">FJGO – Finder Job Gae One</h1>
      <Card className="mb-6">
        <CardContent className="space-y-4 p-4">
          <Input
            placeholder="Titolo lavoro (es. commerciale)"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <Input
            placeholder="Località preferita (es. remoto, Firenze)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div>
            <Label className="block mb-1">Carica il tuo CV (.pdf)</Label>
            <Input type="file" accept="application/pdf" onChange={handleFileChange} />
            {cvFile && <p className="text-sm mt-1 text-green-600">CV caricato: {cvFile.name}</p>}
          </div>
          <Button onClick={handleSearch} disabled={loading}>
            {loading ? "Ricerca in corso..." : "Cerca offerte"}
          </Button>
          <div className="flex gap-4 mt-4">
            <Button onClick={() => exportOdt(true)}>📄 Esporta tutte le candidature (.odt)</Button>
            <Button onClick={() => exportOdt(false)}>📄 Esporta solo inviate o successive (.odt)</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {applications.map((job, index) => (
          <Card key={index} className="border border-gray-300">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{job.titolo}</h2>
              <p className="text-gray-700">
                <strong>Azienda:</strong> {job.azienda} <br />
                <strong>Sede:</strong> {job.sede} <br />
                <strong>Stipendio:</strong> {job.stipendio}
              </p>
              <Textarea readOnly value={job.descrizione} className="bg-gray-100" />
              <Label className="block mt-2">Stato candidatura:</Label>
              <Select
                value={job.stato}
                onValueChange={(value) => handleStatusChange(index, value)}
              >
                <SelectItem value="Non inviata">Non inviata</SelectItem>
                <SelectItem value="Inviata">Inviata</SelectItem>
                <SelectItem value="In attesa di risposta">In attesa di risposta</SelectItem>
                <SelectItem value="Colloquio fissato">Colloquio fissato</SelectItem>
                <SelectItem value="Scartata">Scartata</SelectItem>
              </Select>
              <Label className="block mt-4">Note personali:</Label>
              <Textarea
                placeholder="Es. contattato via email, in attesa feedback, follow-up lunedì..."
                value={job.note}
                onChange={(e) => handleNoteChange(index, e.target.value)}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
