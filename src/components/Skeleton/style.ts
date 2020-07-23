import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const SkeletonTitle = styled(Skeleton)`
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 75% !important;
  line-height: 1.5rem !important;
`;

export const SkeletonParagraph = styled(Skeleton)`
  margin: 0.3rem 0;
`;

export const SkeletonButton = styled(Skeleton)`
  margin: 1rem 0;
  width: 80px !important;
  padding: 1rem;
`;
