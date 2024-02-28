export interface Cita {
    id?: string;
    usuarioId: string;
    doctorId: string;
    motivo: string;
    fechaHora: Date;
    estado: 'pendiente' | 'cancelada' | 'completada';
}