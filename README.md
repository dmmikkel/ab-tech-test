# Teknisk test for Arkitektbedriftene

Utført av Dag Mikkelsen.

Løsningen er deployet her: https://ab-tech-test.vercel.app/

## Forutsetninger

1. Er ikke kjent med hvilke felter på andre steg som er påkrevd eller hvordan dataen skal se ut. Har derfor ikke implementert felt-validering på akkurat dette steget.
1. Styling er gjort i TailwindCSS for å forenkle arbeidet, men jeg er også meget komfortabel med å skrive CSS for hånd.

## Verdt å legge merke til

1. All koden i løsningen er min egen og ingenting er kopiert fra noe sted. Alle komponenter er implementert fra bunnen av, med unntak av Spinner.
1. For å spare brukeren for tid har jeg automatisk oppslag på postnummer, som henter ut både poststed og kommune.

## Potensielle forbedringer

1. Kan være mulig å hente enda mer av informasjonen om eiendommen, via API/datasett fra Kartverket, slik at det er enda mindre for brukeren å fylle ut.
1. Optimalisere logo-filen så den ikke tar så stor plass.
1. Legge postnummer-oppslag i et API, eller splitte informasjonen på mange .json-filer og kun laste den som er nødvendig for oppslaget.
1. Feil i validering burde forsvinne når feltet blir gyldig.
1. Feilhåndtering dersom skjemaet feiler å sende inn.
1. Lage enkel animert overgang mellom de ulike delene av skjemaet.
1. Delen av skjema for gårdsnummer etc. burde kunne forbedres, slik at det blir lettere for brukeren, når kravene til validering er kjent.
1. Kan huske utfylt data fra skjemaet man gikk tilbake fra.
1. Datovelger for datofeltet på oppsummering.
1. Kan style checkbox bedre.
1. Visste ikke gode engelske navn for gnr., bnr., osv, så kan forbedre variabelnavnene.
1. Bedre label og forklaring for "Dato for personlig ansvarsrett som selvbygger"
