'use client';

import React, { useState } from 'react';
import { Star as LucideStar } from 'lucide-react';
import {
  CounsellorWrapper,
  WelcomeSection,
  WelcomeContent,
  WelcomeTitle,
  WelcomeText,
  IllustrationContainer,
  FeedbackSection,
  FeedbackText,
  ShareButton,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalDescription,
  CloseButton,
  RatingContainer,
  RatingTitle,
  StarContainer,
  TextArea,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
} from './Counsellor.styled';

const Counsellor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      setError('Please select a rating first.');
      return;
    }

    setError('');
    console.log({ rating, feedback }); // Simulating API call
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setRating(0);
    setFeedback('');
    setError('');
    setIsSuccess(false);
  };

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <LucideStar
          key={index}
          size={24}
          fill={index < rating ? '#FFA500' : 'none'}
          stroke={index < rating ? '#FFA500' : '#ddd'}
          onClick={() => setRating(index + 1)}
          style={{ cursor: 'pointer' }}
        />
      ));
  };

  const renderModalContent = () => {
    if (isSuccess) {
      return (
        <SuccessMessage>
          <h3>Thank You!</h3>
          <p>Your feedback has been submitted successfully.</p>
        </SuccessMessage>
      );
    }

    return (
      <>
        <ModalTitle>Give us Feedback</ModalTitle>
        <ModalDescription>
          Share your feedback to help make CollegeDekho better for everyone.
        </ModalDescription>
        <RatingContainer>
          <RatingTitle>Overall CollegeDekho Rating</RatingTitle>
          <StarContainer>{renderStars()}</StarContainer>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </RatingContainer>
        <TextArea
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}>Submit Feedback</SubmitButton>
      </>
    );
  };

  return (
    <CounsellorWrapper>
      <WelcomeSection>
        <WelcomeContent>
          <WelcomeTitle>Hi KRupasri, we are here to help you.</WelcomeTitle>
          <WelcomeText>
            Our experts will help you in your entire admission journey.
          </WelcomeText>
        </WelcomeContent>
        <IllustrationContainer>
          <img src="/placeholder.svg" alt="Counsellor Illustration" />
        </IllustrationContainer>
      </WelcomeSection>

      <FeedbackSection>
        <FeedbackText>Tell us! How was your experience with Collegedekho?</FeedbackText>
        <ShareButton onClick={() => setIsModalOpen(true)}>Share your Feedback</ShareButton>
      </FeedbackSection>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            {renderModalContent()}
          </ModalContent>
        </ModalOverlay>
      )}
    </CounsellorWrapper>
  );
};

export default Counsellor;
