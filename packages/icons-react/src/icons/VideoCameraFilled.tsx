// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VideoCameraFilledSvg from '@ant-design/icons-svg/lib/asn/VideoCameraFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoCameraFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VideoCameraFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VideoCameraFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VideoCameraFilled';
}

export default RefIcon;