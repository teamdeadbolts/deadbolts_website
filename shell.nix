{ pkgs ? (import <nixpkgs> {}) }:

pkgs.stdenv.mkDerivation {
  name = "deadbolts";

  buildInputs = with pkgs; [
    nodejs_22
    google-lighthouse
  ];
}