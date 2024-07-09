import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '@/components/MainLayout/Header';
import { Layout } from '@/components/MainLayout/Layout';
import { HeroSection } from '@/components/Home/HeroSection';
import { PlatformSection } from '@/components/Home/PlatformSection';
import { Superpowers } from '@/components/Home/Superpowers';
import { Canadians } from '@/components/Home/Canadians';
import { CreaditSecured } from '@/components/Home/CreaditSecured';
import { Credit } from '@/components/Home/Credit';

export default function Home() {
  return (
    <Layout>
      {/* <HeroSection /> */}
      <CreaditSecured />
      <PlatformSection />
      <Superpowers />
      <Credit />
      {/* <Canadians /> */}
    </Layout>
  );
}
