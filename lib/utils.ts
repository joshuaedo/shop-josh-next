import { toast } from '@/hooks/use-toast';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const copyToClipboard = (text: string | undefined) => {
  if (!text) return;
  navigator.clipboard.writeText(text);
  toast({
    description: 'Copied to clipboard',
  });
};

const generateSlugFromName = (name: string | undefined) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const formatPrice = (price: number | undefined) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (!price) return formatter.format(0);

  return formatter.format(price);
};

const cleanImageUrl = (url: string | undefined) => {
  if (!url) {
    return '';
  }
  const pattern = /=[s]\d+(-c)?$/;
  return url.replace(pattern, '');
};

const logQueryResult = (queryName: string, queryData: any) => {
  console.log(`${queryName}:`, queryData);
};

export {
  cn,
  copyToClipboard,
  generateSlugFromName,
  formatPrice,
  cleanImageUrl,
  logQueryResult,
};
