
import React from 'react';

import {
  type LucideIcon,
  Hand,
  MousePointer2,
  Pencil,
  Minus,
  Square,
  ArrowUpRight,
  Type,
  Undo2,
  Redo2,
  Download,
} from 'lucide-react';

export type EditorTool =
  | 'navigate'
  | 'select'
  | 'pen'
  | 'line'
  | 'rectangle'
  | 'arrow'
  | 'text';

const labels: Record<EditorTool, string> = {
  navigate: 'Verschieben',
  select: 'Auswählen',
  pen: 'Freihand',
  line: 'Linie',
  rectangle: 'Rechteck',
  arrow: 'Pfeil',
  text: 'Text',
};

const icons: Record<EditorTool, LucideIcon> = {
  navigate: Hand,
  select: MousePointer2,
  pen: Pencil,
  line: Minus,
  rectangle: Square,
  arrow: ArrowUpRight,
  text: Type,
};

interface EditorToolsProps {
  tools: readonly EditorTool[];
  value: EditorTool;
  onChange: (tool: EditorTool) => void;
}

export function EditorTools({
  tools,
  value,
  onChange,
}: EditorToolsProps) {
  return (
    <div
      className="editor-tools"
      role="toolbar"
      aria-label="Zeichenwerkzeuge"
    >
      {tools.map((tool) => {
        const Icon = icons[tool];

        return (
          <button
            type="button"
            key={tool}
            className={value === tool ? 'selected' : ''}
            aria-pressed={value === tool}
            title={labels[tool]}
            aria-label={labels[tool]}
            onClick={() => onChange(tool)}
          >
            <Icon size={17} />
            <span>{labels[tool]}</span>
          </button>
        );
      })}
    </div>
  );
}

export { Undo2, Redo2, Download };
