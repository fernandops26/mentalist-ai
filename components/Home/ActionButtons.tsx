'use client';
import { Button } from '@/components/ui/Button';

export default function ActionButtons() {
  const goToMap = () => {
    window.open('/map', '_self');
  };

  const goToGithub = () => {
    window.open(
      'https://github.com/fernandops26/mentalist-ai',
      '_blank',
      'noopener'
    );
  };

  return (
    <div>
      <Button onClick={goToMap}>Go to map</Button>
      <Button variant='subtle' className='ml-4' onClick={goToGithub}>
        See on Github
      </Button>
    </div>
  );
}
