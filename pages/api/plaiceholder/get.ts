import { getPlaiceholder } from 'plaiceholder';
import { siteConfig } from '@/config/site';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { images } = siteConfig;
    const src = images[2];
    const buffer = await fetch(src).then(async (res) => {
      return Buffer.from(await res.arrayBuffer());
    });

    const plaiceholder = await getPlaiceholder(buffer);

    res.status(200).json(plaiceholder);
  } catch (error) {
    res.status(500).json(error + 'could not get plaiceholder');
  }
}
