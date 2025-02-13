// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TaobaoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaobaoCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaobaoCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TaobaoCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TaobaoCircleOutlined';
}

export default RefIcon;