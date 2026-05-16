import React, { useState, useEffect, useMemo } from 'react';
import Layout from '@theme/Layout';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Head from '@docusaurus/Head';

/**
 * 브로슈어 실시간 라이브 프리뷰 페이지 (v3 - 컴포넌트 매핑 및 폰트 로딩 최적화)
 */
export default function PreviewPage() {
  const [content, setContent] = useState('');

  // rehype-raw가 태그를 소문자로 변환할 것에 대비하여 컴포넌트 맵 보강
  const componentMap = useMemo(() => {
    const base = { ...MDXComponents };
    const extended = { ...base };
    
    // 대문자 컴포넌트를 소문자 키로도 등록 (Highlight -> highlight)
    Object.keys(base).forEach(key => {
      extended[key.toLowerCase()] = base[key];
    });
    
    return extended;
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && typeof event.data === 'object' && event.data.type === 'MDX_UPDATE') {
        const pureMDX = event.data.content.replace(/^---[\s\S]*?---\s*/, '');
        setContent(pureMDX);
      }
    };

    window.addEventListener('message', handleMessage);
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'PREVIEW_READY' }, '*');
    }

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <Layout noFooter noNavbar title="Live Studio Preview">
      <Head>
        {/* 외부 폰트 명시적 로드 (가장 확실한 방법) */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;800&display=swap" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
        
        <style>{`
          /* 지마켓 산스 강제 주입 */
          @font-face {
              font-family: 'GmarketSans';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GmarketSansLight.woff') format('woff');
              font-weight: 300;
          }
          @font-face {
              font-family: 'GmarketSans';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GmarketSansMedium.woff') format('woff');
              font-weight: 500;
          }
          @font-face {
              font-family: 'GmarketSans';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GmarketSansBold.woff') format('woff');
              font-weight: 700;
          }

          /* 기본 타이포그래피 보정 */
          body { 
            background: #cbd5e1 !important; 
            font-family: 'Pretendard', 'Noto Sans KR', sans-serif !important;
          }
          
          .theme-doc-markdown {
            font-family: 'Pretendard', 'Noto Sans KR', sans-serif !important;
          }

          /* 프리뷰 전용 여백 조절 */
          .live-preview-container {
            padding: 40px 20px !important;
          }
        `}</style>
      </Head>

      <div className="live-preview-container" style={{ 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <div className="brochure-page-paper" style={{ 
          width: '100%',
          maxWidth: '900px', 
          background: 'white', 
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3)',
          padding: '60px 50px',
          borderRadius: '2px',
          minHeight: '297mm'
        }}>
          <article className="theme-doc-markdown">
            <MDXProvider components={componentMap}>
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[[rehypeRaw, { 
                  tagNames: [
                    'div', 'span', 'style', 'section', 'article', 
                    'highlight', 'text', 'columns', 'col', 'column', 'callout', 'herobutton'
                  ] 
                }]]}
                components={componentMap}
              >
                {content}
              </ReactMarkdown>
            </MDXProvider>
          </article>
        </div>
      </div>
      
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#0f172a',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '30px',
        fontSize: '11px',
        fontWeight: 'bold',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></span>
        PNU STUDIO ENGINE v3
      </div>
    </Layout>
  );
}
