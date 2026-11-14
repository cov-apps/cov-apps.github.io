import React, { useState } from 'react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Camera, Check,
  ChevronRight, CircleHelp, Code2, ExternalLink, FileText, Github,
  Globe2, Heart, LifeBuoy, LockKeyhole, Menu, MonitorSmartphone,
  Radio, Search, ShieldCheck, Sparkles, Ticket, Wifi, X, Zap,
  MessageCircle, LayoutGrid, Layers3
} from 'lucide-react';

const playSearch = (name) => 'https://play.google.com/store/search?q=' + encodeURIComponent(name + ' COV-APPS') + '&c=apps';
const repoUrl = 'https://github.com/cov-apps/cov-apps.github.io';
const policyTiny = 'https://covapps.blogspot.com/2026/10/tiny-ip-camera.html';

const apps = [
  {
    slug: 'tiny-ip-camera',
    name: 'Tiny IP Camera',
    category: 'CAMERA · ANDROID',
    tagline: '작은 기기에서 시작하는 카메라 활용',
    description: 'Android 기기를 IP 카메라처럼 활용하기 위한 간결한 카메라 유틸리티.',
    detail: '복잡한 장비 없이 스마트폰의 카메라를 활용하려는 사용자를 위한 도구입니다. 설치 및 사용 안내는 Google Play의 앱 정보를 확인하세요.',
    icon: Camera, tone: 'mint', number: '01',
    highlights: ['Android 기반 카메라 유틸리티', '도구 중심의 간단한 구성', '앱별 지원 채널 안내'],
    policy: policyTiny,
  },
  {
    slug: 'ip-camera-finder',
    name: 'IP Camera Finder',
    category: 'NETWORK · ANDROID',
    tagline: '네트워크 속 카메라를 더 간편하게',
    description: 'IP 카메라 탐색과 연결 확인에 초점을 맞춘 네트워크 유틸리티.',
    detail: 'IP 카메라를 다루는 사용자가 네트워크 환경에서 장치를 확인하는 데 도움이 되는 유틸리티입니다. 지원 기능은 앱의 스토어 소개를 참고하세요.',
    icon: Search, tone: 'blue', number: '02',
    highlights: ['IP 카메라 중심의 유틸리티', '네트워크 사용 환경 고려', '필요한 기능에 집중'],
  },
  {
    slug: 'jlpt-vocabulary',
    name: 'JLPT 단어장',
    category: 'LEARNING · ANDROID',
    tagline: '꾸준한 일본어 학습을 위한 단어장',
    description: '일본어 학습과 어휘 정리를 위해 만든 단어 학습 앱.',
    detail: '매일 조금씩 일본어 단어를 익히는 학습자를 위한 단어장입니다. 자세한 학습 구성과 제공 기능은 앱의 스토어 소개를 참고하세요.',
    icon: BookOpen, tone: 'peach', number: '03',
    highlights: ['일본어 어휘 학습', '간결한 학습 도구', '모바일 사용 환경에 맞춘 구성'],
  },
  {
    slug: 'lotto-lookup',
    name: '로또 조회',
    category: 'LIFESTYLE · ANDROID',
    tagline: '필요한 정보를 손쉽게 확인',
    description: '로또 관련 결과와 정보를 확인할 때 사용할 수 있는 생활 도구.',
    detail: '필요한 로또 정보를 간단하게 확인할 수 있도록 만든 앱입니다. 제공 범위와 최신 기능은 Google Play의 앱 정보를 확인하세요.',
    icon: Ticket, tone: 'violet', number: '04',
    highlights: ['생활형 정보 도구', '모바일 중심 인터페이스', '가볍게 접근할 수 있는 구성'],
  },
];

function Brand({ inverted = false }) {
  return <a href="/" className={'brand ' + (inverted ? 'brand-light' : '')} aria-label="COV-APPS 홈">
    <span className="brand-mark"><span>C</span></span>
    <span className="brand-word">COV<span className="brand-hyphen">-</span>APPS<span className="brand-dot">.</span></span>
  </a>;
}

function ButtonLink({ href, children, variant = 'primary', icon: Icon = ArrowRight, external = false, className = '' }) {
  return <a href={href} className={'btn btn-' + variant + ' ' + className} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
    {children}{Icon && <Icon size={17} strokeWidth={2.1} aria-hidden="true" />}
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/#apps', label: 'Apps' },
    { href: '/#values', label: 'About' },
    { href: '/support/', label: 'Support' },
  ];
  return <header className="site-header">
    <div className="site-container header-inner">
      <Brand />
      <nav className={'header-nav ' + (open ? 'header-nav-open' : '')} aria-label="주요 메뉴">
        {links.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="nav-github"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
      </nav>
      <a className="header-cta" href="/#apps">Explore apps <ArrowUpRight size={16} /></a>
      <button type="button" className="menu-toggle" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
  </header>;
}

function Footer() {
  return <footer className="site-footer">
    <div className="site-container">
      <div className="footer-top">
        <div><Brand inverted /><p>작고 유용한 앱을 꾸준히 만듭니다.<br />Simple tools, better everyday.</p></div>
        <div className="footer-links"><div><span>Explore</span><a href="/#apps">Our apps</a><a href="/#values">About us</a></div><div><span>Help</span><a href="/support/">Support</a><a href="/privacy/">Privacy</a><a href="/terms/">Site information</a></div><div><span>Connect</span><a href="https://github.com/cov-apps" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a><a href={repoUrl + '/issues'} target="_blank" rel="noopener noreferrer">Issue tracker <ArrowUpRight size={13} /></a></div></div>
      </div>
      <div className="footer-bottom"><span>© 2026 COV-APPS. All rights reserved.</span><span>Independent app studio · Built with care.</span></div>
    </div>
  </footer>;
}

function AppIcon({ item, large = false }) {
  const Icon = item.icon;
  return <div className={'app-icon app-icon-' + item.tone + (large ? ' app-icon-large' : '')}><Icon size={large ? 37 : 27} strokeWidth={1.9} aria-hidden="true" /></div>;
}

function ProductCard({ item }) {
  return <article className="product-card group">
    <div className="product-card-top"><AppIcon item={item} /><span className="product-number">{item.number} / 04</span></div>
    <div className="product-card-copy"><span className="eyebrow small">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p></div>
    <a className="product-card-link" href={'/apps/' + item.slug + '/'} aria-label={item.name + ' 자세히 보기'}><span>Discover app</span><span className="product-arrow"><ArrowUpRight size={20} /></span></a>
  </article>;
}

function PreviewVisual() {
  return <div className="hero-visual" aria-label="카메라와 유틸리티 앱을 상징하는 그래픽 일러스트">
    <div className="visual-halo visual-halo-one"></div><div className="visual-halo visual-halo-two"></div>
    <div className="float-panel float-panel-left"><span className="mini-icon blue-mini"><Wifi size={19} /></span><span><strong>Connected tools</strong><small>Simple by design</small></span><Check size={16} className="mini-check" /></div>
    <div className="phone-mockup">
      <div className="phone-glass">
        <div className="phone-topbar"><span>9:41</span><span className="phone-camera"></span><span>●●●</span></div>
        <div className="phone-content"><span className="preview-kicker"><span className="status-pulse"></span> CAMERA TOOLKIT</span>
          <div className="preview-frame"><div className="frame-grid"></div><div className="frame-mountain one"></div><div className="frame-mountain two"></div><div className="frame-target"><Camera size={28} /></div><span className="frame-time">00:12:08</span></div>
          <div className="preview-bottom"><span><span className="line-small"></span><span className="line-big"></span></span><span className="preview-circle"><ArrowRight size={20} /></span></div>
          <div className="preview-shimmer"></div>
        </div>
        <div className="phone-home"></div>
      </div>
    </div>
    <div className="float-panel float-panel-right"><span className="mini-icon violet-mini"><Sparkles size={19} /></span><span><strong>Useful by nature</strong><small>Made for daily life</small></span></div>
    <div className="visual-footnote">Concept illustration · Not an actual app screen</div>
  </div>;
}

function Home() {
  return <><Header />
    <main>
      <section className="hero-section">
        <div className="site-container hero-layout">
          <div className="hero-content">
            <div className="hero-tag"><span className="tag-spark"><Sparkles size={14} /></span> INDEPENDENT APP STUDIO <span className="tag-line"></span> EST. 2026</div>
            <h1>작은 아이디어로,<br /><span>더 편리한 일상.</span></h1>
            <p className="hero-description">복잡함은 줄이고, 필요한 기능에 집중합니다.<br className="desktop-break" /> COV-APPS는 카메라·학습·생활 속에서 유용하게 쓸 수 있는 앱을 만듭니다.</p>
            <div className="hero-actions"><ButtonLink href="/#apps">Explore our apps</ButtonLink><ButtonLink href="/support/" variant="outline" icon={ArrowUpRight}>Get support</ButtonLink></div>
            <div className="hero-proof"><span className="proof-bubbles"><span><Camera size={14} /></span><span><BookOpen size={14} /></span><span><Ticket size={14} /></span></span><span><strong>4 apps</strong> across everyday categories</span></div>
          </div>
          <PreviewVisual />
        </div>
      </section>
      <section className="trust-strip"><div className="site-container trust-content"><span>BUILDING FOR REAL LIFE</span><span><MonitorSmartphone size={17} /> Mobile first</span><span><Zap size={17} /> Lightweight experience</span><span><Heart size={17} /> Made with care</span></div></section>
      <section id="apps" className="apps-section section-anchor">
        <div className="site-container">
          <div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line"></span> OUR COLLECTION</span><h2>Everyday apps,<br /><span>thoughtfully made.</span></h2></div><p>다양한 일상에서 꼭 필요한 도구를<br className="desktop-break" /> 가볍고 명확한 경험으로 제공합니다.</p></div>
          <div className="products-grid">{apps.map(item => <ProductCard item={item} key={item.slug} />)}</div>
          <p className="apps-footnote"><CircleHelp size={15} /> 정확한 Google Play 상세 페이지 주소는 검증 후 연결할 예정입니다. 앱별 화면의 스토어 검색을 이용할 수 있습니다.</p>
        </div>
      </section>
      <section id="values" className="values-section section-anchor"><div className="site-container"><div className="values-heading"><span className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> WHY COV-APPS</span><h2>Less noise.<br /><span>More useful things.</span></h2><p>멋있어 보이는 기능보다 자주 쓰이는 기능이 더 중요하다고 생각합니다.</p></div><div className="values-grid">
        <div className="value-card"><span className="value-icon"><Layers3 size={24} /></span><span className="value-no">01</span><h3>Keep it simple</h3><p>핵심 기능부터 시작해 불필요한 복잡함을 줄입니다.</p></div>
        <div className="value-card"><span className="value-icon"><Code2 size={24} /></span><span className="value-no">02</span><h3>Built with purpose</h3><p>실제 사용 상황에서 도움이 되는 도구를 고민합니다.</p></div>
        <div className="value-card"><span className="value-icon"><ShieldCheck size={24} /></span><span className="value-no">03</span><h3>Clear & transparent</h3><p>기능 안내, 정책, 지원 정보를 쉽게 찾을 수 있도록 합니다.</p></div>
      </div></div></section>
      <section className="help-section"><div className="site-container"><div className="help-banner"><div><span className="eyebrow"><span className="eyebrow-line"></span> WE'RE HERE TO HELP</span><h2>앱 사용 중 도움이 필요한가요?</h2><p>오류 제보나 기능 제안은 고객지원 페이지에서 안내해 드립니다.</p></div><ButtonLink href="/support/" variant="white" icon={ArrowUpRight}>Visit support</ButtonLink><div className="help-decoration"><LifeBuoy size={190} strokeWidth={0.7} /></div></div></div></section>
    </main><Footer /></>;
}

function Breadcrumb({ current }) {
  return <nav className="breadcrumb" aria-label="현재 위치"><a href="/">Home</a><ChevronRight size={15} /><span>{current}</span></nav>;
}

function PageShell({ eyebrow, title, lead, children }) {
  return <><Header /><main className="interior-main"><div className="site-container"><Breadcrumb current={title} /><div className="interior-header"><span className="eyebrow"><span className="eyebrow-line"></span> {eyebrow}</span><h1>{title}</h1><p>{lead}</p></div>{children}</div></main><Footer /></>;
}

function AppDetail({ item }) {
  return <PageShell eyebrow="APPLICATION / " + item.number title={item.name} lead={item.tagline}>
    <div className="detail-grid">
      <div className={'detail-feature detail-feature-' + item.tone}><div className="detail-feature-inner"><span className="detail-mini-label">COV-APPS ORIGINAL</span><div className="detail-feature-icon"><AppIcon item={item} large /></div><h2>{item.name}</h2><p>Small tools. Better everyday.</p></div><span className="detail-feature-bottom">APP / {item.number}</span></div>
      <div className="detail-copy"><span className="eyebrow small">{item.category}</span><h2>{item.tagline}</h2><p>{item.detail}</p><div className="detail-actions"><ButtonLink href={playSearch(item.name)} external icon={ExternalLink}>Google Play에서 검색</ButtonLink><ButtonLink href="/support/" variant="outline" icon={ArrowUpRight}>고객지원</ButtonLink></div><p className="detail-note"><CircleHelp size={15} /> 스토어 버튼은 앱의 직접 설치 링크가 아닌 검색 결과로 이동합니다.</p></div>
    </div>
    <section className="detail-highlights"><div className="subsection-top"><span className="eyebrow"><span className="eyebrow-line"></span> AT A GLANCE</span><h2>앱 소개</h2></div><div className="highlights-grid">{item.highlights.map((feature, i) => <div className="highlight-item" key={feature}><span>0{i+1}</span><Check size={18} /><p>{feature}</p></div>)}</div></section>
    <div className="detail-policy"><span><LockKeyhole size={20} /> 개인정보 안내</span><p>{item.policy ? '공개된 기존 개인정보처리방침 페이지로 연결합니다.' : '현재 확인된 개인정보처리방침 링크가 없습니다. 앱의 Google Play 스토어 등록정보를 확인해 주세요.'}</p><a href={item.policy || '/privacy/'} target={item.policy ? '_blank' : undefined} rel={item.policy ? 'noopener noreferrer' : undefined}>{item.policy ? '개인정보처리방침 원문 확인' : '정책 안내 페이지'} <ArrowUpRight size={17} /></a></div>
    <div className="back-row"><a href="/#apps"><ArrowLeft size={18} /> 모든 앱 보기</a></div>
  </PageShell>;
}

function Support() {
  return <PageShell eyebrow="HELP CENTER" title="고객지원" lead="앱 사용 중 불편한 점이나 개선 아이디어를 알려주세요.">
    <div className="support-grid"><a href={repoUrl + '/issues/new'} target="_blank" rel="noopener noreferrer" className="support-primary-card"><span className="support-card-icon"><MessageCircle size={28} /></span><h2>문제 신고 및 기능 제안</h2><p>GitHub Issues에 사용 환경과 증상을 남겨 주세요. GitHub 계정 로그인이 필요합니다.</p><span className="support-link">Open an issue <ArrowUpRight size={19} /></span></a><div className="support-secondary-card"><span className="support-card-icon secondary"><CircleHelp size={28} /></span><h2>문의 전 확인하기</h2><p>사용 중인 앱 이름, 앱 버전, Android 버전, 오류 재현 순서를 정리하면 문제를 파악하는 데 도움이 됩니다.</p><a href={repoUrl + '/issues'} target="_blank" rel="noopener noreferrer">기존 문의 보기 <ArrowUpRight size={18} /></a></div></div>
    <section className="faq-section"><div className="subsection-top"><span className="eyebrow"><span className="eyebrow-line"></span> COMMON QUESTIONS</span><h2>자주 묻는 질문</h2></div><div className="faq-list">
      <details><summary>앱에서 오류가 발생했어요.<ChevronRight size={19} /></summary><p>앱 이름, 버전, 휴대폰 모델, Android 버전, 재현 방법을 정리해 GitHub Issues에 남겨 주세요. 개인정보나 비밀번호는 올리지 마세요.</p></details>
      <details><summary>새로운 기능을 제안하고 싶어요.<ChevronRight size={19} /></summary><p>기능의 사용 목적과 기대하는 동작을 간단히 설명해 주세요. 우선순위와 지원 여부는 상황에 따라 달라질 수 있습니다.</p></details>
      <details><summary>개인정보처리방침은 어디서 확인하나요?<ChevronRight size={19} /></summary><p>앱별 개인정보처리방침은 <a href="/privacy/">개인정보처리방침 안내 페이지</a>와 각 Google Play 스토어 등록정보에서 확인할 수 있습니다.</p></details>
      <details><summary>별도의 사용자 게시판이 있나요?<ChevronRight size={19} /></summary><p>현재는 GitHub Issues로 문의를 받고 있습니다. Discussions 기반 사용자 커뮤니티는 준비 단계이며 아직 활성화되지 않았습니다.</p></details>
    </div></section>
    <div className="support-safety"><ShieldCheck size={21} /><p>공개 게시판에는 카메라 주소, 토큰, 비밀번호, 이메일 등 민감한 정보를 게시하지 마세요.</p></div>
  </PageShell>;
}

function Privacy() {
  return <PageShell eyebrow="LEGAL / PRIVACY" title="개인정보처리방침" lead="COV-APPS 웹사이트와 앱별 개인정보 안내 문서를 확인하세요.">
    <div className="legal-grid"><div className="legal-panel"><span className="legal-panel-icon"><Globe2 size={23} /></span><h2>웹사이트 개인정보 안내</h2><p>본 웹사이트에는 자체 회원가입, 문의 입력폼, 광고 스크립트, 자체 방문자 분석 도구를 포함하지 않습니다. GitHub Pages 호스팅 및 외부 링크 서비스에서는 해당 제공자의 정책에 따라 접속 정보가 처리될 수 있습니다.</p><p>Google Play, GitHub 등 외부 사이트로 이동하면 각 서비스의 개인정보처리방침이 적용됩니다. 본 안내는 모바일 앱 자체의 개인정보처리방침을 대신하지 않습니다.</p></div><div className="legal-panel"><span className="legal-panel-icon"><FileText size={23} /></span><h2>앱별 개인정보처리방침</h2><div className="policy-row"><span><strong>Tiny IP Camera</strong><small>공개된 정책 문서</small></span><a href={policyTiny} target="_blank" rel="noopener noreferrer" aria-label="Tiny IP Camera 개인정보처리방침 원문">원문 보기 <ArrowUpRight size={16} /></a></div><div className="policy-row"><span><strong>IP Camera Finder · JLPT 단어장 · 로또 조회</strong><small>정확한 정책 URL 확인 전: 각 앱의 스토어 등록정보 참조</small></span></div></div></div>
    <div className="legal-notice"><CircleHelp size={21} /><div><strong>정책 링크 업데이트 안내</strong><p>앱별 공식 정책이 확인되는 대로 이 페이지에 추가합니다. 실제 설치·이용 전 각 앱의 Google Play 등록정보를 확인해 주세요.</p></div></div>
  </PageShell>;
}

function Terms() {
  return <PageShell eyebrow="LEGAL / WEBSITE" title="사이트 이용안내" lead="COV-APPS 개발자 홈페이지의 이용 범위를 안내합니다.">
    <div className="text-document"><h2>1. 사이트의 목적</h2><p>이 사이트는 COV-APPS가 제공하는 애플리케이션에 대한 소개 및 고객지원 정보 제공을 목적으로 합니다.</p><h2>2. 앱 이용</h2><p>각 앱의 설치·결제·업데이트·이용 가능 여부는 해당 앱의 Google Play 스토어 등록정보와 관련 약관에 따릅니다. 본 사이트는 앱 다운로드 파일을 직접 제공하지 않습니다.</p><h2>3. 외부 링크</h2><p>이 사이트는 Google Play, GitHub 및 개인정보처리방침 페이지 등 외부 서비스로 연결될 수 있으며, 해당 서비스의 자체 운영 정책이 적용됩니다.</p><h2>4. 고객지원</h2><p>기능 제안 및 문제 신고는 <a href="/support/">고객지원 페이지</a>를 참고해 주세요. 공개 채널에는 개인정보나 비밀번호를 게시하지 마세요.</p><p className="text-document-last">이 문서는 사이트 이용 범위를 설명하는 안내문이며, 각 앱의 별도 약관을 대체하지 않습니다.</p></div>
  </PageShell>;
}

function NotFound() {
  return <PageShell eyebrow="404 / PAGE NOT FOUND" title="페이지를 찾을 수 없습니다" lead="요청하신 페이지가 없거나 이동했습니다."><div className="back-row"><a href="/"><ArrowLeft size={18} /> 홈으로 돌아가기</a></div></PageShell>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return <Home />;
  if (path === '/support') return <Support />;
  if (path === '/privacy') return <Privacy />;
  if (path === '/terms') return <Terms />;
  const matched = apps.find((item) => path === '/apps/' + item.slug);
  return matched ? <AppDetail item={matched} /> : <NotFound />;
}
