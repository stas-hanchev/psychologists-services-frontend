'use client';

import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { Container } from '@/components/Container/Container';
import heroImage from '@/public/images/hero.png';
import {
  Arrow,
  CheckBox,
  CtaLink,
  FloatingBadge,
  Glow,
  HeroInner,
  HeroSection,
  Photo,
  PhotoCrop,
  StatsCard,
  StatsText,
  Subtitle,
  TextBlock,
  Title,
  TitleAccent,
  Visual,
} from './Hero.styled';

export default function Hero() {
  const { palette } = useTheme();

  return (
    <HeroSection>
      <Glow aria-hidden>
        <Image src="/images/hero-glow.svg" alt="" width={2469} height={2469} />
      </Glow>
      <Container>
        <HeroInner>
          <TextBlock>
            <Title>
              The road to the <TitleAccent>depths</TitleAccent> of the human soul
            </Title>
            <Subtitle>
              We help you to reveal your potential, overcome challenges and find a guide in your own life with the help
              of our experienced psychologists.
            </Subtitle>
            <CtaLink href="/psychologists">
              Get started
              <Arrow aria-hidden>
                <Image src="/icons/arrow-up-right.svg" alt="" width={19} height={15} />
              </Arrow>
            </CtaLink>
          </TextBlock>

          <Visual>
            <Photo>
              <PhotoCrop>
                <Image
                  src={heroImage}
                  alt="A psychologist listening attentively during a session"
                  fill
                  preload
                  placeholder="blur"
                  sizes="(min-width: 600px) 1062px, 230vw"
                  style={{ objectFit: 'cover' }}
                />
              </PhotoCrop>
            </Photo>

            <FloatingBadge
              aria-hidden
              rotation={15}
              color={palette.tokens.accentYellow}
              size={48}
              sx={{ top: 43, left: 454 }}
            >
              <Image src="/icons/users.svg" alt="" width={20} height={20} style={{ transform: 'rotate(15deg)' }} />
            </FloatingBadge>

            <FloatingBadge
              aria-hidden
              rotation={-15}
              color={palette.tokens.accentPurple}
              size={40}
              sx={{ top: 190, left: -35 }}
            >
              <Image src="/icons/question.svg" alt="" width={10} height={17} />
            </FloatingBadge>

            <StatsCard>
              <CheckBox>
                <Image src="/icons/check.svg" alt="" width={20} height={15} />
              </CheckBox>
              <StatsText>
                Experienced psychologists
                <strong>15,000</strong>
              </StatsText>
            </StatsCard>
          </Visual>
        </HeroInner>
      </Container>
    </HeroSection>
  );
}
