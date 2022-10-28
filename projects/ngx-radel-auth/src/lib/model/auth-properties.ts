export interface AuthProperties {
  /**
   * true - redirect unathorized users to login page immediately.
   *
   * default: false
   */
  redirectToLoginWhenNotAuthorized?: boolean;

  /**
   * true - skip checking and refreshing abilities when new token received.
   * Attention: An action refreshAbilities will never thrown when skipBasedOnTokenAbilities is true.
   *
   * Use it for custom abilities management (depends on your business flow) and throw refreshAbilities manually.
   * Use it when you dont need to use abilities.
   *
   * default: false
   */
  skipBasedOnTokenAbilities?: boolean;
}
