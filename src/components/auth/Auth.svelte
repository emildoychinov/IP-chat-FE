<script lang='ts'>
  import { authTypes } from "./authTypes";
  export let authType = authTypes.REGISTER;
</script>

<div class="parent-div">
  <div class="auth-section">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="auth-options">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="login"
        class:unselected={authType != authTypes.LOGIN}
        on:click={() => {
          authType = authTypes.LOGIN;
        }}
      >
        Login
      </div>
      <div
        class="register"
        class:unselected={authType != authTypes.REGISTER}
        on:click={() => {
          authType = authTypes.REGISTER;
        }}
      >
        Register
      </div>
    </div>
    <div class="login-form">
      <div class="user">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Username</label><br />
        <input type="text" /><br />
      </div>
      <div class="password">
        <label for="lname">Password</label><br />
        <input type="text" id="lname" name="lname" />
      </div>
      {#if authType == authTypes.REGISTER}
        <div class="confirm-password">
          <label for="lname">Confirm Password</label><br />
          <input type="text" id="lname" name="lname" />
        </div>
      {/if}
    </div>
    <button
      class="login-handler"
      class:register-section={authType == authTypes.REGISTER}
      >{authType.toUpperCase()}</button
    >
  </div>
</div>

<style lang="scss">
  .parent-div {
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
  .user,
  .password,
  .confirm-password {
    width: 100%;
    margin-bottom: 20px;
  }
  label {
    font-size: 2em;
  }
  input {
    font-size: 1em;
    width: 100%;
    height: 50px;
    border-color: rgba(0, 0, 0, 0.24);
  }
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 50%;
  }
  .login-handler {
    width: 70%;
    height: 10%;
    margin-top: 50px;
    color: white;
    border: none;
    background: linear-gradient(
      135deg,
      rgba(29, 210, 253, 1) 20%,
      rgba(69, 159, 252, 1) 50%,
      rgba(69, 70, 252, 1) 85%
    );
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.47);
    opacity: 0.5;
    transition: 0.2s;
    font-size: 2em;
    font-weight: 700;
  }
  .login-handler:hover {
    opacity: 1;
  }
  .auth-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 70%;
    margin-top: 120px;
    margin-bottom: 120px;
    background: white;
    border-radius: 60px;
    box-shadow: 0px 4px 20px -1px rgba(0, 0, 0, 0.47);
  }
  .auth-options {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 10%;
    width: 70%;
    margin-bottom: 30px;
    border-color: green;
    background-color: rgba(0, 0, 0, 0.055);
    color: black;
  }
  .login,
  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    font-size: 1.5em;
    background: linear-gradient(
      135deg,
      rgba(29, 210, 253, 1) 20%,
      rgba(69, 159, 252, 1) 50%,
      rgba(69, 70, 252, 1) 85%
    );
    color: white;
    &.unselected {
      color: black;
      background: rgba(0, 0, 0, 0.041);
      &:hover {
        color: white;
        opacity: 0.5;
        background: linear-gradient(
          135deg,
          rgba(29, 210, 253, 1) 20%,
          rgba(69, 159, 252, 1) 50%,
          rgba(69, 70, 252, 1) 85%
        );
      }
    }
  }
  .register.unselected:hover {
    background: linear-gradient(
      -135deg,
      rgba(29, 210, 253, 1) 20%,
      rgba(69, 159, 252, 1) 50%,
      rgba(69, 70, 252, 1) 85%
    );
  }
  .register {
    background: linear-gradient(
      -135deg,
      rgba(29, 210, 253, 1) 20%,
      rgba(69, 159, 252, 1) 50%,
      rgba(69, 70, 252, 1) 85%
    );
  }
</style>
