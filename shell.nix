{ pkgs ? (import <nixpkgs> {
  config.allowUnfree = true;
}) }:

pkgs.stdenv.mkDerivation {
  name = "deadbolts_website";

  buildInputs = with pkgs; [
    nodejs_24
    yarn
  ];
}
