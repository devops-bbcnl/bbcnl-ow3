import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

interface UnsubscribeResult {
  success: boolean;
  message: string;
}

export async function unsubscribeUser(email: string): Promise<UnsubscribeResult> {
  try {
    if (!email || !email.includes('@')) {
      return {
        success: false,
        message: 'Please provide a valid email address'
      };
    }

    const subscribersRef = collection(db, 'subscribers');
    const q = query(subscribersRef, where('email', '==', email.toLowerCase().trim()));
    
    try {
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return {
          success: false,
          message: 'This email is not registered in our newsletter'
        };
      }

      const subscriberDoc = querySnapshot.docs[0];
      const subscriberData = subscriberDoc.data();

      if (subscriberData.active === false) {
        return {
          success: false,
          message: 'This email has already been unsubscribed'
        };
      }

      // Only update allowed fields
      await updateDoc(doc(db, 'subscribers', subscriberDoc.id), {
        active: false,
        unsubscribedAt: new Date()
      });

      return {
        success: true,
        message: 'Successfully unsubscribed from the newsletter'
      };
    } catch (firestoreError) {
      console.error('Firestore operation error:', firestoreError);
      return {
        success: false,
        message: 'Unable to process your request. Please try again later.'
      };
    }
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return {
      success: false,
      message: 'An error occurred while processing your request'
    };
  }
}