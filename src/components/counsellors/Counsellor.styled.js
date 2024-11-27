import styled from 'styled-components';

export const CounsellorWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const WelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WelcomeContent = styled.div`
  flex: 1;
`;

export const WelcomeTitle = styled.h1`
  color: #1e0b4f;
  font-size: 1.5rem;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const WelcomeText = styled.p`
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const IllustrationContainer = styled.div`
  width: 300px;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FeedbackSection = styled.div`
  background: #1e0b4f;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

export const FeedbackText = styled.h2`
  color: white;
  font-size: 1.25rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ShareButton = styled.button`
  background: #ffa500;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ff8c00;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

export const ModalTitle = styled.h2`
  color: #1e0b4f;
  font-size: 1.5rem;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ModalDescription = styled.p`
  color: #666;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
`;

export const RatingContainer = styled.div`
  margin-bottom: 20px;
`;

export const RatingTitle = styled.div`
  font-weight: 500;
  margin-bottom: 12px;
`;

export const StarContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  resize: none;
`;

export const SubmitButton = styled.button`
  background: #4c4cff;
  color: white;
  border: none;
  padding: 12px 0;
  border-radius: 4px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #3939ff;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4444;
  margin: 8px 0;
  font-size: 14px;
`;

export const SuccessMessage = styled.div`
  text-align: center;
  h3 {
    color: #4caf50;
    margin-bottom: 8px;
  }
  p {
    color: #666;
  }
`;
