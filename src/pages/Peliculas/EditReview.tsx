import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';

interface EditReviewProps {
  initialText: string;
  initialRating: number;
  onSave: (editedText: string, rating: number) => void;
  onCancel: () => void;
}

const EditReview: React.FC<EditReviewProps> = ({ initialText, initialRating, onSave, onCancel }) => {
  const [editedText, setEditedText] = useState(initialText);
  const [rating, setRating] = useState(initialRating);

  const handleSave = () => {
    onSave(editedText, rating);
  };

  return (
    <div>
      <textarea className='form-control' value={editedText} onChange={(e) => setEditedText(e.target.value)} />
      <div className='d-flex flex-wrap justify-content-center'>
        <label className='col-12'>Calificación:</label>
        <Rating
          count={5}
          value={rating}
          onChange={(newRating) => setRating(newRating)}
          size={48}
          activeColor="#ffd700"
        />
      </div>
      <button className="d-flex col-12 btn btn-danger mr-2 mb-3 p-3" onClick={handleSave}>Guardar</button>
      <button className="d-flex col-12 btn btn-primary mr-2 mb-3 p-3" onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default EditReview;
