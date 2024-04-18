"use client";
import React, {useRef, useEffect} from 'react';

interface RetroButtonProps {
    href: string;
    label: string;
    size?: 'sm' | 'lg';
    buttonType?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info';
    openNewTab?: boolean;
}

const RetroButton: React.FC<RetroButtonProps> = ({
                                                     href = "",
                                                     label,
                                                     size = '',
                                                     buttonType = '',
                                                     openNewTab = false
                                                 }) => {
    const buttonRef = useRef<HTMLDivElement>(null); // Ref para o elemento pai
    const btnRef = useRef<HTMLAnchorElement>(null); // Ref para o elemento .btn

    useEffect(() => {
        const btn = btnRef.current; // Agora aponta para o elemento .btn

        const handleMouseDown = () => {
            btn?.classList.add('btn-active');
        };

        const handleMouseUp = () => {
            btn?.classList.remove('btn-active');
        };

        const handleMouseLeave = () => {
            btn?.classList.remove('btn-center', 'btn-right', 'btn-left', 'btn-active');
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!btn) return;
            const {left, width} = btn.getBoundingClientRect();
            const myPosX = e.pageX;
            let newClass = '';
            if (myPosX < left + 0.3 * width) {
                newClass = 'btn-left';
            } else if (myPosX > left + 0.65 * width) {
                newClass = 'btn-right';
            } else {
                newClass = 'btn-center';
            }

            // Limpa as classes anteriores para evitar duplicatas
            btn.classList.remove('btn-center', 'btn-right', 'btn-left');
            btn.classList.add(newClass); // Adiciona a nova classe
        };

        btn?.addEventListener('mousedown', handleMouseDown);
        btn?.addEventListener('mouseup', handleMouseUp);
        btn?.addEventListener('mouseleave', handleMouseLeave);
        btn?.addEventListener('mousemove', handleMouseMove as any);

        return () => {
            btn?.removeEventListener('mousedown', handleMouseDown);
            btn?.removeEventListener('mouseup', handleMouseUp);
            btn?.removeEventListener('mouseleave', handleMouseLeave);
            btn?.removeEventListener('mousemove', handleMouseMove as any);
        };
    }, [size, buttonType]); // Re-attach the event listeners when size or buttonType changes

    return (
        <div ref={buttonRef} className={`retro-btn ${size} ${buttonType}`}>
            {openNewTab ? <a className="btn" href={href} ref={btnRef} target="_blank" rel="noopener noreferrer">
                <span className="btn-inner">
                    <span className="content-wrapper">
                        <span className="btn-content">
                            <span className="btn-content-inner" aria-label={label}>
                                {label}
                            </span>
                        </span>
                    </span>
                </span>
                </a> :
                <a className="btn" href={href} ref={btnRef}>
                <span className="btn-inner">
                    <span className="content-wrapper">
                        <span className="btn-content">
                            <span className="btn-content-inner" aria-label={label}>
                                {label}
                            </span>
                        </span>
                    </span>
                </span>
                </a>}

        </div>
    );
};

export default RetroButton;