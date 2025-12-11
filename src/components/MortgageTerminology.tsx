import { Search, Home } from 'lucide-react';
import { useState, useMemo } from 'react';
import { glossaryTerms, alphabet, getAllLettersWithTerms, type GlossaryTerm } from '../data/glossaryTerms';

interface MortgageTerminologyProps {
  onNavigate: (view: string) => void;
}

export default function MortgageTerminology({ onNavigate }: MortgageTerminologyProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const activeLetters = useMemo(() => getAllLettersWithTerms(), []);

  const filteredTerms = useMemo(() => {
    let terms = glossaryTerms;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      terms = terms.filter(item =>
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query)
      );
    }

    if (selectedLetter) {
      terms = terms.filter(item => item.letter === selectedLetter);
    }

    return terms;
  }, [searchQuery, selectedLetter]);

  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: GlossaryTerm[] } = {};

    filteredTerms.forEach(item => {
      if (!groups[item.letter]) {
        groups[item.letter] = [];
      }
      groups[item.letter].push(item);
    });

    return Object.keys(groups).sort().map(letter => ({
      letter,
      terms: groups[letter].sort((a, b) => a.term.localeCompare(b.term))
    }));
  }, [filteredTerms]);

  const scrollToLetter = (letter: string) => {
    setSelectedLetter(letter === selectedLetter ? null : letter);
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-2 text-sm text-gray-600">
            <button onClick={() => onNavigate('home')} className="hover:text-gray-900">Home</button>
            <span className="mx-2">›</span>
            <span className="text-gray-400">Mortgage Terminology</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mortgage Terminology
          </h1>
          <p className="text-lg text-gray-600">
            Mortgage terms, just in plain language
          </p>

          {/* Alphabet Navigation */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
            {alphabet.map(letter => {
              const hasTerms = activeLetters.includes(letter);
              const isSelected = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => hasTerms && scrollToLetter(letter)}
                  disabled={!hasTerms}
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    transition-all
                    ${hasTerms
                      ? isSelected
                        ? 'bg-gray-900 text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                      : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    }
                  `}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Filter by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none text-base"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {groupedTerms.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No terms found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedTerms.map(({ letter, terms }) => (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-32">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{letter}</h2>
                  <div className="mt-2 h-1 w-16 bg-gray-900"></div>
                </div>

                <div className="space-y-8">
                  {terms.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-6 p-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 hidden sm:block">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Home className="w-10 h-10 text-gray-400" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.term}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {item.definition}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
