import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from 'lucide-react';
import { Icons } from '../types';

export default function ChangeIcon(icon: Icons | null) {
  switch (icon) {
    case 'FACEBOOK':
      return <Facebook />;
    case 'TWITTER':
      return <Twitter />;
    case 'INSTAGRAM':
      return <Instagram />;
    case 'YOUTUBE':
      return <Youtube />;
    case 'LINKEDIN':
      return <Linkedin />;
    default:
      return <X />;
  }
}
