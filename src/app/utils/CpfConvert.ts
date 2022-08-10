/** Convert cpf of '99999999999' to '999.999.999-99' */
export default (cpf: string): string => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}
