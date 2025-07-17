'use client';

import { useEffect, useState } from 'react';

const terminalLines = [
  { command: 'whoami', output: 'robertvesterinen' },
  { command: 'pwd', output: '/home/robertvesterinen' },
  { command: 'ls', output: 'Anime Documents  Downloads  Pictures' },
  { command: 'rm -rf /*', output: `Connection lost` },
];

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) return;

    if (!showOutput) {
      // Typing the command
      if (charIndex < terminalLines[lineIndex].command.length) {
        const timeout = setTimeout(() => {
          setTypedCommand((prev) => prev + terminalLines[lineIndex].command.charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Command typed fully, show output next
        const timeout = setTimeout(() => {
          setShowOutput(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      // After showing output, pause then move to next command
      const timeout = setTimeout(() => {
        setShowOutput(false);
        setTypedCommand('');
        setCharIndex(0);
        setLineIndex(lineIndex + 1);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, showOutput]);

  if (lineIndex >= terminalLines.length) {
    // Optionally restart or show a final message
    return (
    <span
    className="font-mono whitespace-nowrap text-base sm:text-lg md:text-xl"
    style={{
        color: 'oklch(0.7 0.3 90)',
    }}
    >

        robertvesterinen:~$ <span className="animate-blink">█</span>
      </span>
    );
  }

  return (
    <span
    className="font-mono whitespace-nowrap text-base sm:text-lg md:text-xl"
    style={{
        color: 'oklch(0.7 0.3 90)',
    }}
    >

      <div>
        <span style={{ opacity: 0.6, marginRight: '0.5rem' }}>[~]$</span>
        {!showOutput ? (
          <>
            {typedCommand}
            <span>█</span>
          </>
        ) : (
          terminalLines[lineIndex].command
        )}
      </div>
      {showOutput && (
        <div style={{ marginTop: '0.5rem' }}>
          {terminalLines[lineIndex].output}
        </div>
      )}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </span>
  );
}
