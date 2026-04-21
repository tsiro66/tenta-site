export default function AboutSection() {
  const stats = [
    { value: "33", label: "ΧΡΟΝΙΑ ΕΜΠΕΙΡΙΑΣ" },
    { value: "13.000", label: "ΚΑΤΑΣΚΕΥΑΣΤΕΣ ΚΑΙ ΤΟΠΟΘΕΤΗΣΕΙΣ" },
    { value: "100%", label: "ΘΕΤΙΚΑ ΣΧΟΛΙΑ ΠΕΛΑΤΩΝ" },
  ];

  return (
    <section className="relative z-10 bg-blue-800">
      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4 md:gap-0 px-4 md:px-6 py-12 md:py-20 text-center border-b border-blue-700">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 md:gap-2">
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-orange-400">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm md:text-base font-medium tracking-widest text-blue-200 uppercase max-w-60">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Company description */}
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — title + subtitle */}
          <div className="text-center md:text-left md:sticky md:top-28">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase leading-tight">
              Master Περγκολα Τεντα Θεσσαλονικη
            </h2>

            <p className="mt-6 text-lg md:text-xl font-semibold text-orange-300 leading-relaxed">
              Μοναδικές κατασκευές με τα βαρέος τύπου υφάσματα της Vogue
              και τους ατσάλινους βραχίονες βαρέος τύπου Ζευς.
            </p>
          </div>

          {/* Right — body in card */}
          <div className="rounded-2xl bg-blue-900/60 border border-blue-700/50 p-8 md:p-10 space-y-6 text-base md:text-lg text-blue-100 leading-relaxed">
            <p>
              Η επιχείρηση μας από το 1992 δραστηριοποιείται στη μελέτη, κατασκευή
              και τοποθέτηση <strong className="text-orange-300">τεντών παντός τύπου</strong>.
            </p>
            <p>
              Δημιουργήθηκε από τον Αθανάσιο Μόκα Διπλωματούχο Εργοδηγό Μηχανολόγο
              και κατάφερε να προσφέρει στην πελατεία του εντιμότητα, αξιοπιστία
              προσεγμένη και ποιοτική εργασία, με γνώμονα πάντα την ασφάλεια της κάθε
              κατασκευής.
            </p>
            <p>
              Η συνεχής επαφή με τον πελάτη από το στάδιο της παραγγελίας μέχρι την
              παράδοση του έργου, καθώς και η προσωπική μας εργασία, εξασφαλίζει την
              ποιότητα και την συνέπεια η οποία διακρίνει την επιχείρηση μας.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
