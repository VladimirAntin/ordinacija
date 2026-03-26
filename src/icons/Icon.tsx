import MailIcon from '@/icons/MailIcon';
import PhoneIcon from '@/icons/PhoneIcon';
import SendIcon from '@/icons/SendIcon';
import {FC, memo} from 'react';
import CalendarIcon from '@/icons/CalendarIcon';
import ArrowIcon from '@/icons/ArrowIcon';
import LocationIcon from '@/icons/LocationIcon';
import InstagramIcon from '@/icons/InstagramIcon';
import SmileIcon from '@/icons/SmileIcon';
import SparklesIcon from '@/icons/SparklesIcon';
import StethoscopeIcon from '@/icons/StethoscopeIcon';
import LayersIcon from '@/icons/LayersIcon';
import ShieldCheckIcon from '@/icons/ShieldCheckIcon';
import MicroscopeIcon from '@/icons/MicroscopeIcon';
import ScanIcon from '@/icons/ScanIcon';
import BabyIcon from '@/icons/BabyIcon';
import ZapIcon from '@/icons/ZapIcon';

type IconName =
  | 'mail'
  | 'phone'
  | 'send'
  | 'calendar'
  | 'arrow'
  | 'location'
  | 'instagram'
  | 'smile'
  | 'sparkles'
  | 'stethoscope'
  | 'layers'
  | 'shieldCheck'
  | 'microscope'
  | 'scan'
  | 'baby'
  | 'zap';

const Icon = ({name, ...props}: {name: IconName} & Icon) => {
  const icons: Record<IconName, FC<Icon>> = {
    mail: MailIcon,
    phone: PhoneIcon,
    send: SendIcon,
    calendar: CalendarIcon,
    arrow: ArrowIcon,
    location: LocationIcon,
    instagram: InstagramIcon,
    smile: SmileIcon,
    sparkles: SparklesIcon,
    stethoscope: StethoscopeIcon,
    layers: LayersIcon,
    shieldCheck: ShieldCheckIcon,
    microscope: MicroscopeIcon,
    scan: ScanIcon,
    baby: BabyIcon,
    zap: ZapIcon,
  };

  const IconComponent = icons[name];

  return IconComponent ? <IconComponent {...props} /> : null;
};

export default memo(Icon);
