import React from 'react';

import styled from 'styled-components';

import { NotificationContainer, NotificationManager } from 'react-notifications';

const NotificationContainerAbsolute = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  .notification-container {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999999;
    width: 320px;
    padding: 0px 15px;
    max-height: calc(100% - 30px);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .notification {
    box-sizing: border-box;
    padding: 15px 15px 15px 15px;
    border-radius: 3px;
    color: #fff;
    background-color: #ccc;
    box-shadow: 0 0 12px rgba(0,0,0,0.2);
    cursor: pointer;
    font-size: 1em;
    line-height: 1.2em;
    position: relative;
    opacity: 0.9;
    margin-top: 15px;
  }

  .notification .title {
    font-size: 1em;
    line-height: 1.2em;
    font-weight: bold;
    margin: 0 0 5px 0;
  }

  .notification:hover, .notification:focus {
    opacity: 1;
  }

  .notification-enter {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }

  .notification-enter.notification-enter-active {
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
  }

  .notification-leave {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }

  .notification-leave.notification-leave-active {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
    transition: all 0.4s;
  }

  .notification-info {
    background-color: #2f96b4;
  }

  .notification-success {
    background-color: #51a351;
  }

  .notification-warning {
    background-color: #f89406;
  }

  .notification-error {
    background-color: #bd362f;
  }
`;

export const Manager = NotificationManager;

export const Notification = () => {
  return(
    <NotificationContainerAbsolute>
      <NotificationContainer />
    </NotificationContainerAbsolute>
  );
};
