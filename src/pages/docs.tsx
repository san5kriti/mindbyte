import Head from 'next/head';
import styles from '@/styles/docs.module.css';

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentation | MindByte</title>
        <meta name="description" content="MindByte Demo Disclaimer and Transparency Statement" />
      </Head>

      <main className={styles.docsWrapper}>
        <p><strong>Demo Disclaimer & Transparency Statement</strong></p>

        <section>
          <p>
            This web application is a demonstration prototype for an AI-powered cognitive learning tool.
            It is not a commercial product and should not be interpreted as offering production-level functionality,
            persistent user accounts, or data services. All features are presented solely for exploratory and educational purposes.
          </p>
        </section>

        <section>
          <p><strong>Data Privacy and Handling</strong></p>
          <ul>
            <li>This demo does not collect, store, or share any personal user data.</li>
            <li>Uploaded files (text, PDFs, or videos) are handled temporarily and locally during the session.</li>
            <li>No cookies, analytics tools, or third-party trackers are integrated into the demo.</li>
            <li>All user interactions are processed within the browser environment or transient memory, unless explicitly stated otherwise.</li>
          </ul>
        </section>

        <section>
          <p><strong>AI Features and Limitations</strong></p>
          <ul>
            <li>Flashcards and quiz responses are generated using AI language models based on the uploaded or entered material.</li>
            <li>Outputs may occasionally contain inaccuracies or lack context. Users are strongly encouraged to verify all generated content before relying on it in academic or professional settings.</li>
            <li>The AI study companion is intended for light summarization and recall assistance only and should not replace professional instruction or verified sources.</li>
          </ul>
        </section>

        <section>
          <p><strong>Intellectual Property and Attribution</strong></p>
          <ul>
            <li>This entire demo — including all frontend code, UI components, visual design, and interaction logic — is the original and sole creation of Sanskriti Shelke, unless explicitly credited otherwise.</li>
            <li>All design elements, animations, layout styles, and visual motifs are custom-made.</li>
            <li>Third-party tools, fonts, or libraries used (such as React Icons, Google Fonts, Tailwind CSS, Framer Motion, or Next.js) are acknowledged and used in accordance with their respective open-source licenses.</li>
            <li>Any borrowed background imagery or media will be cited with full attribution where applicable.</li>
          </ul>
        </section>

        <section>
          <p><strong>License and Intended Use</strong></p>
          <ul>
            <li>This prototype is released strictly for non-commercial, educational, and portfolio purposes.</li>
            <li>Redistribution, reproduction, or adaptation of this project’s design, logic, or interface — in part or in full — is not permitted without prior written consent from the author.</li>
            <li>This application does not guarantee accessibility, uptime, or security and is not intended for institutional deployment.</li>
          </ul>
        </section>

        <section>
          <p><strong>Author Statement</strong></p>
          <p>
            This platform is the intellectual and creative work of <strong>Sanskriti Shelke</strong>, who has independently developed every aspect of its architecture — from codebase to concept to design. Unless otherwise stated, all work displayed here reflects her personal authorship, including graphics, interface components, motion logic, and AI integration methods.
          </p>
          <p>
            All rights reserved. For inquiries regarding use, collaboration, or licensing, please contact the author directly.
          </p>
        </section>

        <section>
          <p><strong>Credits</strong></p>
          <ul>
            <li><strong>Framework & Libraries:</strong> Next.js, React, Tailwind CSS, Framer Motion, React Icons</li>
            <li><strong>Typography:</strong> Merriweather (Google Fonts)</li>
            <li><strong>Animations & Effects:</strong> Custom Framer Motion logic</li>
            <li><strong>Icons & Assets:</strong> React Icons (MIT license), Custom SVG illustrations</li>
            <li><strong>Background Video:</strong> Sourced from royalty-free media (Pexels.com) and edited by Sanskriti Shelke</li>
            <li><strong>Design Inspiration:</strong> Based on neuroscience, cognitive design principles, and custom UI explorations</li>
          </ul>
        </section>

        <section>
          <p><strong>Contact</strong></p>
          <p>For professional inquiries, collaborations, or questions regarding licensing and usage, please reach out via:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:sanskritishelke.r@gmail.com">sanskritishelke.r@gmail.com</a></li>
            <li><strong>Website:</strong> <a href="https://sanskritishelke.com/" target="_blank" rel="noopener noreferrer">sanskritishelke.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sanskritishelke" target="_blank" rel="noopener noreferrer">linkedin.com/in/sanskritishelke</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}