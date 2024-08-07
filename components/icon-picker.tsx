'use client';
import { Icons } from '@/types';
import ChangeIcon from '@/utils/ChangeIcon';
import { useState } from 'react';

export default function IconPicker() {
  const [icon, setIcon] = useState<Icons>(null);

  const Icon = ChangeIcon(icon);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* create select with change state */}
      <select
        value={icon ? icon : 'null'}
        onChange={(e) => setIcon(e.target.value as Icons)}
      >
        {/* create options */}
        <option value="null">Select Icon</option>
        <option value="FACEBOOK">Facebook</option>
        <option value="TWITTER">Twitter</option>
        <option value="INSTAGRAM">Instagram</option>
        <option value="YOUTUBE">Youtube</option>
        <option value="LINKEDIN">Linkedin</option>
      </select>

      {/* display icon */}
      <div>{Icon}</div>
    </div>
  );
}
