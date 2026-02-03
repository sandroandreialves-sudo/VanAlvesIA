
import React, { useState } from 'react';
import { geminiService } from './services/geminiService';
import { ProcessingResult, ProcessingStatus } from './types';
import SectionCard from './components/SectionCard';
import FollowUpChat from './components/FollowUpChat';

const App: React.FC = () => {
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState<ProcessingStatus>(ProcessingStatus.IDLE);
  const [result, setResult] = useState<ProcessingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleProcess = async () => {
    if (!transcript.trim()) return;
    
    setStatus(ProcessingStatus.LOADING);
    setError(null);
    
    try {
      const data = await geminiService.processTranscript(transcript);
      setResult(data);
      setStatus(ProcessingStatus.SUCCESS);
      // Smooth scroll to results
      setTimeout(() => {
        document.getElementById('results-view')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro inesperado.");
      setStatus(ProcessingStatus.ERROR);
    }
  };

  const handleReset = () => {
    setResult(null);
    setTranscript('');
    setStatus(ProcessingStatus.IDLE);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">Van Alvesia Advocacia</h1>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Assistente Pós-Reunião</p>
            </div>
          </div>
          
          <div className="flex gap-2">
             {status === ProcessingStatus.SUCCESS && (
               <button 
                onClick={handleReset}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium text-sm shadow-sm"
               >
                 Novo Atendimento
               </button>
             )}
             <a 
              href="https://vanalvesia.adv.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
             >
               Site Oficial
             </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Input Section */}
        {status !== ProcessingStatus.SUCCESS && (
          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100 overflow-hidden border border-gray-100 mb-10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-gray-900">Processar Nova Reunião</h2>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase">Inteligência VanAlvesIA</span>
                </div>
              </div>
              <p className="text-gray-500 mb-6">Cole a transcrição ou o resumo da reunião para gerar a documentação estruturada.</p>
              
              <textarea
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Ex: Cliente João da Silva, CPF 123... Mencionou que o banco cobrou taxas indevidas..."
                className="w-full h-80 p-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none text-gray-800 placeholder:text-gray-400 font-medium"
              />

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg>
                  <span>Análise detalhada em segundos via IA</span>
                </div>
                
                <button
                  onClick={handleProcess}
                  disabled={!transcript.trim() || status === ProcessingStatus.LOADING}
                  className={`
                    w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2
                    ${!transcript.trim() || status === ProcessingStatus.LOADING 
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-300'}
                  `}
                >
                  {status === ProcessingStatus.LOADING ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Analisando Caso...
                    </>
                  ) : (
                    <>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      Gerar Documentação
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl mb-10 flex items-start gap-3">
             <svg className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             <div>
               <p className="font-bold">Houve um problema</p>
               <p className="text-sm opacity-90">{error}</p>
             </div>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div id="results-view" className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-black text-gray-900">Análise da Reunião</h2>
                <p className="text-gray-500">Documentação jurídica completa estruturada para o Odoo.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase border border-green-200 shadow-sm">Processado com Sucesso</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              
              <div className="space-y-6">
                <SectionCard 
                  title="1️⃣ Ficha do Cliente - Odoo" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                  content={result.cliente_ficha}
                  colorClass="border-blue-500"
                />

                <SectionCard 
                  title="2️⃣ Resumo do Caso" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>}
                  content={result.caso_resumo}
                  colorClass="border-indigo-500"
                />

                <SectionCard 
                  title="3️⃣ Análise Jurídica" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17v-4"/><path d="M15 17V7"/><path d="M12 17v-7"/></svg>}
                  content={result.analise_juridica}
                  colorClass="border-purple-500"
                />

                <SectionCard 
                  title="7️⃣ Proposta Comercial" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                  content={result.proposta}
                  colorClass="border-emerald-500"
                />
              </div>

              <div className="space-y-6">
                <SectionCard 
                  title="⚠️ Pontos Críticos" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                  content={result.pontos_criticos}
                  colorClass="border-red-500"
                />

                <SectionCard 
                  title="4️⃣ Plano de Ação" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>}
                  content={result.plano_acao}
                  colorClass="border-orange-500"
                />

                <SectionCard 
                  title="5️⃣ Documentos" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.51a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>}
                  content={result.documentos}
                  colorClass="border-teal-500"
                />

                <SectionCard 
                  title="8️⃣ Campos Odoo" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/><path d="M12 14h.01"/><path d="M12 10h.01"/><path d="M12 6h.01"/></svg>}
                  content={result.odoo_campos}
                  colorClass="border-gray-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
              <div className="lg:col-span-2 space-y-6">
                <SectionCard 
                  title="6️⃣ Devolutiva para o Cliente" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>}
                  content={result.devolutiva}
                  colorClass="border-yellow-500"
                />

                <SectionCard 
                  title="📋 Próximas Perguntas" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>}
                  content={result.perguntas}
                  colorClass="border-gray-400"
                />
              </div>
              
              <div className="lg:col-span-1 sticky top-24">
                <FollowUpChat initialContext={`Resumo: ${result.caso_resumo}\nAnálise: ${result.analise_juridica}\nCliente: ${result.cliente_ficha}`} />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
             <div className="text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">Instagram</div>
             <div className="text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">LinkedIn</div>
             <div className="text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">WhatsApp</div>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Van Alvesia Advocacia. Todos os direitos reservados.</p>
          <p className="text-gray-400 text-xs mt-1 italic">Processado com inteligência artificial para maior agilidade jurídica no ecossistema Odoo.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
