import React, { FC, memo } from 'react';

import GooglePayButton from '@google-pay/button-react';
import { TGooglePayRes } from 'widgets/Order';

interface IProps {
  onResponse: (res: TGooglePayRes) => Promise<void>;
  price: string;
}

const PayButton: FC<IProps> = ({ onResponse, price }) => {
  return (
    <GooglePayButton
      environment='TEST'
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: price,
          currencyCode: 'BYN',
          countryCode: 'BY',
        },
      }}
      onLoadPaymentData={onResponse}
    />
  );
};
export default memo(PayButton);
