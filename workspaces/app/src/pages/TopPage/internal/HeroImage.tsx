import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import IMAGE_SRC from '../../../../../client/assets/cyber.webp';

const _Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const _Image = styled.img`
  display: inline-block;
  width: 100%;
`;

export const HeroImage: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const updateImage = useCallback(({ height, src, width }: { height: number; src: string; width: number }) => {
    const image = imageRef.current;
    if (image == null) {
      return;
    }
    image.width = width;
    image.height = height;
    image.src = src;
  }, []);

  useEffect(() => {
    const image = imageRef.current;
    if (image == null) {
      return;
    }

    // 画像の読み込みが完了した時の処理
    image.onload = () => {
      const imageWidth = image.clientWidth;
      const imageHeight = (imageWidth / 16) * 9;
      
      // サイズを更新する
      updateImage({
        height: imageHeight,
        src: IMAGE_SRC, // 直接画像のパスを指定
        width: imageWidth,
      });
    };

    image.src = IMAGE_SRC;
  }, [updateImage]);

  useEffect(() => {
    return () => {
      const image = imageRef.current;
      if (image) {
        image.onload = null;
      }
    };
  }, []);

  return (
    <_Wrapper>
      <_Image ref={imageRef} alt="Cyber TOON" />
    </_Wrapper>
  );
};
