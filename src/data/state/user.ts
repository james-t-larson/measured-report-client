import type { User } from '../user';
import type { BaseState } from './base';

export interface UserState extends BaseState {
  user: User;
}
