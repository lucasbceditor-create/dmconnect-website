import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, CheckCircle2, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="DMConnect Logo" className="w-10 h-10 rounded-xl object-cover drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
            <span className="font-bold text-xl tracking-tight">DMConnect</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="#features" className="hover:text-white transition-colors">Recursos</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Preços</Link>
            <Link href="#comparison" className="hover:text-white transition-colors">vs ManyChat</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://app.dmconnect.com.br/login" className="text-sm font-medium hover:text-emerald-400 transition-colors">
              Login
            </Link>
            <Link href="https://app.dmconnect.com.br/login" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition-transform active:scale-95 hidden sm:block">
              Começar Grátis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Aprovado Oficialmente pela Meta
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Venda no automático <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient-x">
              sem pagar em Dólar.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            A automação de Instagram perfeita para infoprodutores e negócios locais. 
            Responda Stories, DMs e Comentários 24h por dia. <strong>O fim das mensalidades abusivas do ManyChat.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.dmconnect.com.br/login" className="w-full sm:w-auto bg-emerald-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95 flex items-center justify-center gap-2 group">
              Criar Conta Gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#comparison" className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center">
              Comparar com ManyChat
            </Link>
          </div>

          <p className="mt-6 text-sm text-neutral-500">
            Não pedimos cartão de crédito. Teste grátis hoje.
          </p>
        </div>

        {/* Dashboard Mockup Image */}
        <div className="mt-24 max-w-6xl mx-auto px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 h-full w-full bottom-0" />
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0f] shadow-2xl overflow-hidden aspect-video relative">
            {/* Aqui irá a imagem real do dashboard gerada pelo design */}
            <div className="absolute inset-0 flex flex-col">
               <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-black/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
               </div>
               <div className="flex-1 flex items-center justify-center bg-[url('https://transparenttextures.com/patterns/cubes.png')] bg-white/[0.02]">
                  <div className="text-center">
                    <Zap size={48} className="mx-auto text-emerald-500/50 mb-4" />
                    <p className="text-xl font-medium text-neutral-500">Visual Flow Builder em Ação</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 bg-[#0a0a0f] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que mudar para o DMConnect?</h2>
            <p className="text-neutral-400 text-lg">Pare de pagar taxas abusivas que aumentam junto com seu sucesso.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ManyChat */}
            <div className="rounded-3xl border border-white/5 bg-black/50 p-8 opacity-75">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-400">Outras Plataformas</h3>
              </div>
              <ul className="space-y-4 text-neutral-500">
                <li className="flex items-start gap-3"><X className="shrink-0 text-red-500/70" /> Cobram em Dólar (Risco cambial)</li>
                <li className="flex items-start gap-3"><X className="shrink-0 text-red-500/70" /> Cobram por número de contatos (Fica caro rápido)</li>
                <li className="flex items-start gap-3"><X className="shrink-0 text-red-500/70" /> Interface complexa cheia de abas</li>
                <li className="flex items-start gap-3"><X className="shrink-0 text-red-500/70" /> Suporte apenas em Inglês</li>
              </ul>
            </div>

            {/* DMConnect */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-bl-xl">A ESCOLHA INTELIGENTE</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-black">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">DMConnect</h3>
              </div>
              <ul className="space-y-4 text-neutral-200">
                <li className="flex items-start gap-3"><CheckCircle2 className="shrink-0 text-emerald-400" /> Mensalidade Fixa em Reais (R$)</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="shrink-0 text-emerald-400" /> Contatos Ilimitados no Plano Pro</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="shrink-0 text-emerald-400" /> Flow Builder Visual Limpo e Direto ao Ponto</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="shrink-0 text-emerald-400" /> Suporte e Tutoriais 100% em Português</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#050505] to-[#050505]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Preços simples, sem pegadinhas.</h2>
            <p className="text-neutral-400 text-lg">Escale seu negócio sem ser punido financeiramente por isso.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Plano Starter</h3>
              <p className="text-neutral-400 mb-6">Para quem está testando as águas.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">R$0</span>
                <span className="text-neutral-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-emerald-500" /> Até 2 Automações Ativas</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-emerald-500" /> 100 DMs / mês</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-emerald-500" /> Flow Builder Visual</li>
              </ul>
              <Link href="https://app.dmconnect.com.br/login" className="w-full py-4 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-colors text-center">
                Criar Conta Grátis
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="rounded-3xl border border-emerald-500/50 bg-emerald-500/10 p-8 flex flex-col relative shadow-[0_0_50px_rgba(16,185,129,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">Plano Pro</h3>
              <p className="text-emerald-400/70 mb-6">Acelere suas vendas no automático.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">R$49</span>
                <span className="text-neutral-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-emerald-400" /> Automações Ilimitadas</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-emerald-400" /> DMs Ilimitadas</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-emerald-400" /> Contatos Ilimitados</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-emerald-400" /> Suporte Prioritário</li>
              </ul>
              <Link href="https://app.dmconnect.com.br/login" className="w-full py-4 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors text-center">
                Assinar o Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black">
              DM
            </div>
            <span className="font-bold text-lg text-white">DMConnect</span>
          </div>
          <p className="text-neutral-500 text-sm">
            © 2026 DMConnect. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-neutral-400">
            <Link href="https://app.dmconnect.com.br/termos" className="hover:text-white">Termos</Link>
            <Link href="https://app.dmconnect.com.br/privacidade" className="hover:text-white">Privacidade</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const X = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);
